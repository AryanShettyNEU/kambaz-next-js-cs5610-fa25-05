"use client";
import { redirect, useParams } from "next/navigation";
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
import AssignmentEditor from "../AssignmentsEditor";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IAssignment } from "@/app/(Kambaz)/Database/types";
import { updateAssignment } from "../reducer";

export default function Edit() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState(() =>
    assignments.find((assignment: IAssignment) => assignment._id == aid)
  );

  const redirectBack = (e: SyntheticEvent) => {
    e.preventDefault();
    redirect("../Assignments");
  };

  const onSave = (e: SyntheticEvent) => {
    dispatch(updateAssignment(assignment));
    redirectBack(e);
  };

  useEffect(() => {
    setAssignment(
      assignments.find((assignment: IAssignment) => assignment._id == aid)
    );
  }, [assignments]);

  return (
    <AssignmentEditor
      assignment={assignment as any}
      setAssignment={setAssignment as any}
      onClose={redirectBack}
      onSave={onSave}
    />
  );
}
