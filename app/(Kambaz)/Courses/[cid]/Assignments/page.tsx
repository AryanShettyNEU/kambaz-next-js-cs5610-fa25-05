"use client";
import {
  Button,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControls";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentItem from "./AssignmentItem";
import { assignments } from "@/app/(Kambaz)/Database";

import "./index.css";
import { useParams } from "next/navigation";

export default function Assignments() {
  const { cid } = useParams();
  const currentAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments">
      <div className="d-flex flex-row justify-content-between mb-4">
        <InputGroup style={{ maxWidth: "300px" }} id="wd-search-assignment">
          <InputGroup.Text
            className="bg"
            style={{
              background: "transparent",
              borderRight: "none",
              paddingRight: 0,
            }}
          >
            <FaSearch color="gray" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search..."
            aria-label="Search"
            style={{
              borderLeft: "none",
            }}
          />
        </InputGroup>
        <div className="float-end">
          <Button
            variant="secondary"
            size="lg"
            className="me-1 rounded-2"
            id="wd-add-assignment-group rounded-2"
          >
            <BsPlusLg />
            Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="me-1 rounded-2"
            id="wd-add-assignment"
            href="/Courses/1234/Assignments/New"
          >
            <BsPlusLg />
            <span className="fw-bold">Assignment</span>
          </Button>
        </div>
      </div>
      <ListGroup id="wd-modules" className="rounded-0">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex flex-row justify-content-between align-middle ">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-2" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </span>
            <AssignmentControlButtons />
          </div>
          {currentAssignments.map(({ _id, course, ...rest }) => (
            <AssignmentItem key={_id} aid={_id} cid={course} {...rest} />
          ))}
        </ListGroupItem>
      </ListGroup>
      \
    </div>
  );
}
