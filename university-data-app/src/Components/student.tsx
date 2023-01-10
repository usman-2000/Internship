import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ISchoolData from "./types";

type Props = {
  schooldata: ISchoolData[];
};

function StudentName({ schooldata }: Props[]) {
  return (
    <div>
      <h1>Student Names</h1>
      <ul>
        {schoolData.map((e: string, i: number) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default StudentName;
