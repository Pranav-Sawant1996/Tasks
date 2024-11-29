import React, { useEffect, useState } from "react";
import Header from "./header";
import styles from "../../style/dashboard.module.css";
import Sidebar from "./sidebar";
import MyTask from "./myTask/myTask";
import { useAuth } from "../../context/authContext";
import { Outlet, useLocation } from "react-router-dom";
import { fetchTask } from "../apiCalls/apiCall";

export default function Dashboard() {
  const [renderComponent, setRenderComponent] = useState("dashboard");
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const { userDetails, todo, setTodo } = useAuth();
  const currentUrl = location.pathname;

  useEffect(() => {
    if (currentUrl != "/dashboard/sharedTask") {
      fetchTask(userDetails, todo, setTodo);
    }
  }, [userDetails.id]);
  return (
    <main className={styles.dashboard}>
      <Header />
      <div className={styles.contentWrapper}>
        <Sidebar
          setRenderComponent={setRenderComponent}
          renderComponent={renderComponent}
        />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
