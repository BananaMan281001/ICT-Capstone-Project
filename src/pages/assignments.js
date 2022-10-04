import React from "react";
import "./assignments.css"
import Assignment from "./assignment.js"

const Assignments = () => (
    <div className="assignmentBody">
        <h1 className="assignmentHeading">Assignments:</h1>
        <Assignment assignmentName="Database Assignment" course="Database Design" tutor="Walter" unitConvener="Also Walter" status="Review submitted" eta="27/10/2022"/>
        <br />
        <Assignment assignmentName="Database Assignment" course="Database Design" tutor="Walter" unitConvener="Also Walter" status="Review rejected" eta="27/10/2022" />
        <br />
        <Assignment assignmentName="Database Assignment" course="Database Design" tutor="Walter" unitConvener="Also Walter" status="Review in progress" eta="27/10/2022" />
        <br />
        <Assignment assignmentName="Database Assignment" course="Database Design" tutor="Walter" unitConvener="Also Walter" status="Review completed" eta="27/10/2022" />
    </div>
);

export default Assignments;