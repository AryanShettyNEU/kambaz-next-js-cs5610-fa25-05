"use client";
import { useParams } from "next/navigation";
import {
  Button,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
  Col,
} from "react-bootstrap";
import { assignments } from "@/app/(Kambaz)/Database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { aid } = useParams();
  const currentAssignment = assignments.find(
    (assignment) => assignment._id == aid
  );

  return (
    <div id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        defaultValue={currentAssignment?.title}
        placeholder="Assignment"
      />

      <FormControl
        className="mt-4"
        as="textarea"
        id="wd-description"
        rows={12}
        cols={42}
        defaultValue={currentAssignment?.description}
      />

      <Row className="my-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col sm={6}>
          <FormControl
            id="wd-points"
            type="number"
            defaultValue={currentAssignment?.points}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
        </Col>
        <Col sm={6}>
          <FormSelect id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZ">QUIZ</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
        </Col>
        <Col sm={6}>
          <FormSelect id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER_GRADE">Letter Grade</option>
            <option value="ABSOLUTE">Absolute</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
        </Col>
        <Col sm={6}>
          <div className="border p-3 rounded">
            <FormSelect id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </FormSelect>
            <br />
            <p className="fw-bold">Online Entry Options</p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-row">
                <FormCheck type="checkbox" id="wd-text-entry" />
                <FormLabel htmlFor="wd-text-entry" className="ms-2">
                  Text Entry
                </FormLabel>
              </div>
              <div className="d-flex flex-row">
                <FormCheck type="checkbox" id="wd-website-url" />
                <FormLabel htmlFor="wd-website-url" className="ms-2">
                  Website URL
                </FormLabel>
              </div>
              <div className="d-flex flex-row">
                <FormCheck type="checkbox" id="wd-media-recordings" />
                <FormLabel htmlFor="wd-media-recordings" className="ms-2">
                  Media Recordings
                </FormLabel>
              </div>
              <div className="d-flex flex-row">
                <FormCheck type="checkbox" id="wd-student-annotation" />
                <FormLabel htmlFor="wd-student-annotation" className="ms-2">
                  Student Annotation
                </FormLabel>
              </div>
              <div className="d-flex flex-row">
                <FormCheck type="checkbox" id="wd-file-upload" />
                <FormLabel htmlFor="wd-file-upload" className="ms-2">
                  File Uploads
                </FormLabel>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm={3} className="text-end">
          <p>Assign</p>
        </Col>
        <Col sm={6}>
          <div className="border p-3 rounded">
            <div>
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </FormLabel>
              <br />
              <FormControl
                type="text"
                defaultValue="Everyone"
                id="wd-assign-to"
              />
            </div>
            <br />
            <div>
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Due
              </FormLabel>
              <br />
              <FormControl
                type="datetime-local"
                defaultValue={currentAssignment?.dueDate}
                id="wd-due-date"
              />
            </div>
            <br />
            <Row>
              <Col>
                <FormLabel htmlFor="wd-available-from" className="fw-bold">
                  Available from
                </FormLabel>
                <FormControl
                  type="datetime-local"
                  defaultValue={currentAssignment?.availableDate}
                  id="wd-available-from"
                />
              </Col>
              <Col>
                <FormLabel htmlFor="wd-available-until" className="fw-bold">
                  Until
                </FormLabel>
                <FormControl type="datetime-local" id="wd-available-until" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <hr />
      <div className="d-flex justify-content-end">
        <Link href={"../Assignments"}>
          <Button
            variant="secondary"
            className="me-1"
            id="wd-assignment-cancel"
          >
            Cancel
          </Button>
        </Link>
        <Link href={"../Assignments"}>
          <Button variant="danger" id="wd-assignment-save" href="..">
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
}
