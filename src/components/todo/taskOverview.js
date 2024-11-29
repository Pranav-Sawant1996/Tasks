import React, { useEffect, useState } from "react";
import styles from "../../style/dashboard.module.css";
import DonutChart from "react-donut-chart";
import { Doughnut } from "react-chartjs-2";
// import { ArcElement } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAuth } from "../../context/authContext";
import { getOverdueTask } from "../apiCalls/apiCall";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaskOverview() {
  const { todo, userDetails } = useAuth();
  const [overdueTask, setOverdueTask] = useState([]);
  const [upcomingTask, setUpcomingTask] = useState([]);
  const [overduePercent, setOverduePercent] = useState();
  const getPercentage = (tasksLength) => {
    let percent = Math.round(
      (tasksLength / (overdueTask.length + upcomingTask.length)) * 100
    );
    console.log("ppppp", percent);
    setOverduePercent(percent);
    // return percent;
  };

  useEffect(() => {
    getOverdueTask(userDetails.id, setOverdueTask, setUpcomingTask);
  }, []);

  useEffect(() => {
    getPercentage(overdueTask.length);
  }, [overdueTask]);

  const options = {
    // plugins: {
    // legend: {
    //   display: false,
    //   position: "bottom",
    // },
    // },
  };
  return (
    <section className={styles.taskStatusChart}>
      <h2 className={styles.taskStatusTitle}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8234f04af799fd33f37369b73e0dbe7c591da74cf0de21c1299cbf4cbd730407?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a"
          alt=""
          className={styles.statusIcon}
        />
        Task Overview
      </h2>
      <div className={styles.statusChart}>
        <div className={styles.statusItem}>
          <Doughnut
            data={{
              labels: ["Overdue Tasks", "Upcoming Tasks"],
              datasets: [
                {
                  data: [overduePercent, 100 - overduePercent],
                  backgroundColor: ["red", "blue"],
                },
              ],
            }}
            option={options}
          ></Doughnut>
        </div>
      </div>
    </section>
  );
}
