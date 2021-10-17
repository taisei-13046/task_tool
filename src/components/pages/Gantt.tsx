import React, { useEffect, useState, useCallback } from "react";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  TaskFieldsModel,
} from "@syncfusion/ej2-react-gantt";
import Button from "@mui/material/Button";
import "../../App.css";

import { db } from "../../firebase";
import { DataType } from "../../interfaces";
import { GanttType } from "../../interfaces";
import { useForceUpdate } from "../../hooks/UseForceUpdate";
import { Header } from "../organisms/Header";

const GanttData = [
  {
    TaskID: 1,
    TaskName: "Project Initiation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
  },
  {
    TaskID: 2,
    TaskName: "Project Estimation",
    StartDate: new Date("04/02/2019"),
    EndDate: new Date("04/21/2019"),
  },
];

const taskFields: TaskFieldsModel = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
};

  const ganttData: GanttType[] = [];
  let index = 1;

  const getGanttData = async () => {
    const docRef = db.collection("tasks");
    await docRef.get().then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const task = doc.data() as DataType;
        if (task) {
          ganttData.push({
            TaskID: index,
            TaskName: task.taskValue,
            StartDate: task.dateStartValue.toDate(),
            EndDate: task.dateEndValue.toDate(),
          });
          index++;
        }
      });
    });
  };

export const Gantt = () => {
  const forceUpdate = useForceUpdate();
  //const ganttData: GanttType[] = [];
  //let index = 1;

  //useEffect(() => {
  //  const getGanttData = async () => {
  //    const docRef = db.collection("tasks");
  //    await docRef.get().then((querySnapshot) => {
  //      querySnapshot.docs.map((doc) => {
  //        const task = doc.data() as DataType;
  //        if (task) {
  //          ganttData.push({
  //            TaskID: index,
  //            TaskName: task.taskValue,
  //            StartDate: task.dateStartValue.toDate(),
  //            EndDate: task.dateEndValue.toDate(),
  //          });
  //          index++;
  //        }
  //      });
  //    });
  //  };
  //  getGanttData()
  //})

  console.log(ganttData);
  console.log(GanttData);
  return (
    <div>
      <Header />
      <GanttComponent
        dataSource={ganttData}
        height="450px"
        taskFields={taskFields}
        timelineSettings={{ timelineViewMode: "Day" }}
      ></GanttComponent>
      <p onClick={() => {getGanttData()}}>get</p>
      <p onClick={() => {forceUpdate()}}>強制的にアップデート</p>
    </div>
  );
};
