import React, { useState } from "react";
import styles from "../../../style/myTask.module.css";
import { useAuth } from "../../../context/authContext";
import { fetchTask, filterTasks } from "../../apiCalls/apiCall";

export default function TaskFilter() {
  const { userDetails, todo, setTodo } = useAuth();
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const filterTask = () => {
    filterTasks(userDetails.id, setTodo, priority, status);
  };
  
  return (
    <div className={styles.taskFilter}>
      <h2 className={styles.taskListTitle}>Task Filter</h2>
      <div className={styles.taskListDivider}></div>
      <fieldset>
        <legend>Priority:</legend>
        <div className={styles.filter}>
          <label>
            <input
              type="radio"
              value="1"
              checked={priority === "1"}
              onChange={(e) => setPriority(e.target.value)}
            />
            Extreme
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={priority === "2"}
              onChange={(e) => setPriority(e.target.value)}
            />
            Moderate
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={priority === "3"}
              onChange={(e) => setPriority(e.target.value)}
            />
            Low
          </label>
        </div>
      </fieldset>

      {/* Status Radio Buttons */}
      <fieldset>
        <legend>Status:</legend>
        <div className={styles.filter}>
          <label>
            <input
              type="radio"
              value="1"
              checked={status === "1"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              value="2"
              checked={status === "2"}
              onChange={(e) => setStatus(e.target.value)}
            />
            In Progress
          </label>
          <label>
            <input
              type="radio"
              value="3"
              checked={status === "3"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Completed
          </label>
        </div>
      </fieldset>
      <button onClick={filterTask} className={styles.submitButton}>
        Filter
      </button>
    </div>
  );
}
