"use client";
import Link from "next/link";
import {
  Button,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsGripVertical, BsPlus, BsPlusLg } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControls";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentItem from "./AssignmentItem";

import "./index.css";

export default function Assignments() {
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
          <AssignmentItem
            title="A1"
            modules="Multiple Modules"
            availableDate="May 6 at 12:00am"
            dueDate="May 13 at 11:59pm"
            points={100}
          />
          <AssignmentItem
            title="A2"
            modules="Multiple Modules"
            availableDate="May 13 at 12:00am"
            dueDate="May 20 at 11:59pm"
            points={100}
          />
          <AssignmentItem
            title="A1"
            modules="Multiple Modules"
            availableDate="May 20 at 12:00am"
            dueDate="May 27 at 11:59pm"
            points={100}
          />
        </ListGroupItem>
      </ListGroup>
      \
    </div>
  );
}
