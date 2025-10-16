import { BsGripVertical, BsPencilSquare } from "react-icons/bs";
import { ListGroupItem } from "react-bootstrap";
import React from "react";
import LessonControlButtons from "../Modules/LessonControlButtons";
import Link from "next/link";

interface AssignmentListItemProps {
  title: string;
  modules: string;
  availableDate: string;
  dueDate: string;
  points: string | number;
  aid: string;
  cid: string;
}

const AssignmentListItem: React.FC<AssignmentListItemProps> = ({
  title,
  modules,
  availableDate,
  dueDate,
  points,
  aid,
  cid,
}) => {
  return (
    <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center">
      <div className="d-flex flex-row">
        <BsGripVertical className="me-3 fs-3 text-secondary" />
        <Link href={`/Courses/${cid}/Assignments/${aid}`}>
          <BsPencilSquare className="me-3 mt-1 fs-5 text-success" />
        </Link>
      </div>

      <div className="flex-grow-1 d-flex align-items-start">
        <div>
          <Link
            href={`/Courses/${cid}/Assignments/${aid}`}
            className="text-decoration-none text-dark"
          >
            <h5 className="mb-1 fw-bold">{title}</h5>
          </Link>

          <p className="mb-0 text-muted small">
            <span className="text-danger">{modules}</span> |&nbsp;
            <span className="fw-bold">Not available until </span>
            {new Date(availableDate).toLocaleString()} |&nbsp;
            <span className="fw-bold">Due </span>
            {new Date(dueDate).toLocaleString()} | {points} pts
          </p>
        </div>
      </div>

      <LessonControlButtons />
    </ListGroupItem>
  );
};

export default AssignmentListItem;
