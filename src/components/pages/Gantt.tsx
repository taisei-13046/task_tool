import React, { useEffect, useState } from "react";
import { GanttComponent, TaskFieldsModel } from "@syncfusion/ej2-react-gantt";
import "../../App.css";

import { db } from "../../firebase";
import { DataType } from "../../interfaces";
import { GanttType } from "../../interfaces";
import { Header } from "../organisms/Header";

const taskFields: TaskFieldsModel = {
  id: "TaskID",
  name: "TaskName",
  startDate: "StartDate",
  endDate: "EndDate",
};

export const Gantt = () => {
  const [ganttData, setGanttData] = useState<GanttType[]>([]);
  let index = 1;

  useEffect(() => {
    const getGanttData = async () => {
      const getTaskData: GanttType[] = [];
      const docRef = db.collection("tasks");
      await docRef
        .orderBy("dateStartValue")
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot.docs);
          querySnapshot.docs.map((doc) => {
            const task = doc.data() as DataType;
            if (task) {
              getTaskData.push({
                TaskID: index,
                TaskName: task.taskValue,
                StartDate: task.dateStartValue.toDate(),
                EndDate: task.dateEndValue.toDate(),
              });
              index++;
            }
          });
        });
      setGanttData(getTaskData);
    };
    getGanttData();
  }, []);

  console.log(ganttData);
  return (
    <div>
      <Header />
      <GanttComponent
        dataSource={ganttData}
        height="650px"
        taskFields={taskFields}
        timelineSettings={{ timelineViewMode: "Week" }}
      ></GanttComponent>
    </div>
  );
};
