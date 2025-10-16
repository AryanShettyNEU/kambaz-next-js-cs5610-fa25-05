"use client";
import { useParams } from "next/navigation";
import * as db from "@/app/(Kambaz)/Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      {/* <button className="wd-action-button">Collapse All</button>&nbsp;
      <button className="wd-action-button">View Progress</button>&nbsp;
      <select id="wd-select-one-genre">
        <option value="PUBLISH_ALL">Publish All</option>
      </select>
      &nbsp;
      <button className="wd-create-module-button">+ Module</button> */}
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <ListGroupItem
              className="wd-module p-0 mb-5 fs-5 border-gray"
              key={module._id}
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex flex-row justify-content-between ">
                <span>
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                </span>
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson) => (
                    <ListGroupItem className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
