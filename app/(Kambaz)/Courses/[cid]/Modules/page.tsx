import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
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
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex flex-row justify-content-between ">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </span>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary  d-flex flex-row justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              Week 2
            </span>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex flex-row justify-content-between">
            <span>
              <BsGripVertical className="me-2 fs-3" />
              Week 3
            </span>
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
