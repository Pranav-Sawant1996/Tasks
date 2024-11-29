import React, { useEffect, useState } from "react";
import styles from "../../style/dashboard.module.css";
import TaskItem from "./taskItem";
import AddTask from "./addTask/addTask";
import { useAuth } from "../../context/authContext";
import TaskOverview from "./taskOverview";
import moment from "moment";

export default function TaskList() {
  const [openAddTask, setOpenAddTask] = useState(false);
  const handleOpenAddTask = () => setOpenAddTask(true);
  const handleCloseAddTask = () => setOpenAddTask(false);
  const { userDetails, todo, setTodo } = useAuth();
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    if(todo.length>0){
      let t=todo.filter((task,i)=>{
        return moment(task.task_date).isSame(moment(),'day')
      })
      setTasks(t)
    }
  },[todo])

  return (
    <>
      <section className={styles.taskList}>
        <div className={styles.taskListHeader}>
          <h2 className={styles.taskListTitle}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b879b73c0911eac8616b77f1d4ed14ff4a82611d68b337e283770409dfb763b7?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
              alt=""
              className={styles.todoIcon}
            />
            To-Do
          </h2>
          <button className={styles.addTaskButton} onClick={handleOpenAddTask}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0285e9fe6d8a3f8cd2f618b5e0fdba6fed0182eb4bdf6632825d3be91bfc3d32?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
              alt=""
              className={styles.addIcon}
            />
            Add task
          </button>
        </div>
        {tasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
        <AddTask
          openAddTask={openAddTask}
          setOpenAddTask={setOpenAddTask}
          handleOpenAddTask={handleOpenAddTask}
          handleCloseAddTask={handleCloseAddTask}
          headerTitle="Add New Task"
          action="addTask"
        />
      </section>
      <div>
        <TaskOverview />
      </div>
    </>
  );
}
