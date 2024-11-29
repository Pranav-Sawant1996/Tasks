import React, { useState } from "react";
import styles from "../../../style/myTask.module.css";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTask from "../addTask/addTask";
import { analyseTaskDescription, deleteTask, fetchTask } from "../../apiCalls/apiCall";
import { useAuth } from "../../../context/authContext";

export default function TaskDetails({ selectedTask }) {
  // console.log("selectedTask",selectedTask)
  const { userDetails, todo, setTodo } = useAuth();

  const [openAddTask, setOpenAddTask] = useState(false);
  const handleOpenAddTask = () => setOpenAddTask(true);
  const handleCloseAddTask = () => setOpenAddTask(false);
  const [textAnalysis, setTextAnalysis] = useState("");

  const analyseTask=()=>{
    analyseTaskDescription(selectedTask.description,setTextAnalysis)
  }

  const deleteSelectedTask = () => {
    deleteTask(selectedTask.id);
    fetchTask(userDetails, todo, setTodo);
  };
  return (
    <section className={styles.taskDetails}>
      <div className={styles.taskDetailsContent}>
        <h2 className={styles.taskListTitle}>Task Details</h2>
        <div className={styles.taskListDivider}></div>
        <div className={styles.taskDetailDescription}>
          <h3>Task Title: {selectedTask.task_title}</h3>
          <p>
            <strong>Task Description:</strong> {selectedTask.description}
          </p>
          <p>
            <strong>Deadline :</strong>{" "}
            {moment(
              selectedTask.deadline,
              "ddd, DD MMM YYYY HH:mm:ss [GMT]"
            ).format("DD/MM/YYYY")}
          </p>
          <p className={styles.taskDetailPriority}>
            Priority:{" "}
            <span style={{ color: "#f21e1e" }}>
              {selectedTask.priority == "1"
                ? "Extreme"
                : selectedTask.priority == "2"
                ? "Moderate"
                : "Low"}
            </span>
          </p>
          <p className={styles.taskDetailStatus}>
            Status:{" "}
            <span style={{ color: "#f21e1e" }}>
              {selectedTask.status == "1"
                ? "Not Started"
                : selectedTask.status == "2"
                ? "In Progress"
                : "Completed"}
            </span>
          </p>
          <div>
            <button className={styles.submitButton} onClick={analyseTask} >Analyse</button>
            { textAnalysis && <span>  Sentiment is {textAnalysis.label}</span>}
          </div>
        </div>
        <div className={styles.taskIcons}>
          <EditIcon onClick={handleOpenAddTask} />
          <DeleteIcon onClick={deleteSelectedTask} />
        </div>
      </div>

      <AddTask
        openAddTask={openAddTask}
        setOpenAddTask={setOpenAddTask}
        handleOpenAddTask={handleOpenAddTask}
        handleCloseAddTask={handleCloseAddTask}
        headerTitle="Edit Task"
        task={selectedTask}
        action="editTask"
      />
    </section>
  );
}
