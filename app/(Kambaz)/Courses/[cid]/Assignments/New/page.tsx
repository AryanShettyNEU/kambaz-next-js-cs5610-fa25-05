"use client";
import { IAssignmentData } from "@/app/(Kambaz)/Database/types";
import { redirect, useParams } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment } from "../reducer";
import AssignmentEditor from "../AssignmentsEditor";

const New = () => {
  const dispatch = useDispatch();
  const { cid } = useParams();

  const [assignment, setAssignment] = useState<IAssignmentData>(() => {
    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);
    return {
      title: "New Assignment",
      description: "",
      points: 100,
      course: cid as string,
      availableDate: today.toISOString().slice(0, 10),
      dueDate: oneWeekLater.toISOString().slice(0, 10),
      untilDate: oneWeekLater.toISOString().slice(0, 10),
    };
  });

  const redirectBack = (e: SyntheticEvent) => {
    e.preventDefault();
    redirect("../Assignments");
  };

  const onSave = (e: SyntheticEvent) => {
    dispatch(addAssignment(assignment));
    redirectBack(e);
  };

  return (
    <AssignmentEditor
      assignment={assignment}
      setAssignment={setAssignment}
      onClose={redirectBack}
      onSave={onSave}
    />
  );
};

export default New;
