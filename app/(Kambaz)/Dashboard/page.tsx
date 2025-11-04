"use client";
import { SyntheticEvent, useState, useMemo } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollInCourse, unEnrollInCourse } from "./reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [showAll, setShowAll] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isFaculty = currentUser?.role === "FACULTY";

  const toggleEnrollments = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowAll((prev) => !prev);
  };

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );

  const filteredCourses = useMemo(
    () => courses.filter((c: any) => showAll || isEnrolled(c._id)),
    [courses, enrollments, currentUser, showAll]
  );

  const handleAdd = () => dispatch(addNewCourse(course));
  const handleUpdate = () => dispatch(updateCourse(course));
  const handleDelete = (id: string) => dispatch(deleteCourse(id));
  const handleEdit = (c: any) => setCourse(c);

  const handleEnrollToggle = (e: SyntheticEvent, course: any) => {
    e.preventDefault();
    const payload = { courseId: course._id, userId: currentUser?._id };
    dispatch(
      isEnrolled(course._id)
        ? unEnrollInCourse(payload)
        : enrollInCourse(payload)
    );
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button variant="primary" onClick={toggleEnrollments}>
          Enrollments
        </Button>
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <div className="float-end">
              <Button
                variant="primary"
                id="wd-add-new-course-click"
                onClick={handleAdd}
              >
                Add
              </Button>
              <Button
                variant="warning"
                className="ms-2"
                id="wd-update-course-click"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </div>
          </h5>
          <FormControl
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            className="mb-2"
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {filteredCourses.map((c: any) => {
          const enrolled = isEnrolled(c._id);
          return (
            <Col
              className="wd-dashboard-course"
              style={{ width: "300px" }}
              key={c._id}
            >
              <Card>
                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    src={c.image || "/images/reactjs.jpg"}
                    height={160}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </CardText>

                    <Button variant="primary">Go</Button>

                    {isFaculty && (
                      <>
                        <Button
                          variant="warning"
                          className="me-2 float-end"
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEdit(c);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="float-end me-2"
                          id="wd-delete-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(c._id);
                          }}
                        >
                          Delete
                        </Button>
                      </>
                    )}

                    {currentUser?._id && (
                      <div className="mt-2">
                        <Button
                          variant={enrolled ? "danger" : "success"}
                          onClick={(e) => handleEnrollToggle(e, c)}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      </div>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
