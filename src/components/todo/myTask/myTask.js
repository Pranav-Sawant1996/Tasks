import React, { useEffect, useState } from "react";
import MyTaskList from "./myTaskList";
import TaskDetails from "./taskDetails";
import { useAuth } from "../../../context/authContext";
import TaskFilter from "./taskFilter";
import styles from '../../../style/myTask.module.css'


export default function MyTask() {
  const { userDetails, todo, setTodo } = useAuth();
  const [selectedTask, setSelectedTask] = useState(
    todo.length > 0 ? todo[0] : []
  );
  console.log("todo",todo)
  useEffect(() => {
    if (selectedTask.length == 0 && todo.length > 0) {
      setSelectedTask(todo[0]);
    }
  }, [todo]);
  return (
    <>
      <div className={styles.myTasks}>
      <MyTaskList tasks={todo} setSelectedTask={setSelectedTask} />
      <TaskDetails selectedTask={selectedTask} />
      <TaskFilter/>
      </div>
    </>
  );
}
