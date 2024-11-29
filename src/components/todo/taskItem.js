import React from 'react'
import styles from "../../style/dashboard.module.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import defaultImage from '../../images/defaultTask.png'
import moment from 'moment';


export default function TaskItem({ task_title, description, priority, status, created_at, estimated_time, deadline }) {

  return (
    <article className={styles.taskItem}>
      <div className={styles.task}>
        <div className={styles.taskContent}>
          <h3 className={styles.taskTitle}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c48875ad706d5d125723c446a273036687f8a60d46a77a7b5cf077fe2022793e?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="" className={styles.checkIcon} />
            {task_title}
          </h3>
          <p className={styles.taskDescription}>{description}</p>
          <p className={styles.taskDescription}>Estimated time: {estimated_time}</p>
          <p className={styles.taskDescription}>Deadline: {moment(deadline).format('ddd, DD MMM YYYY')}</p>
        </div>
       
      </div>
      <div className={styles.taskDetails}>
        <div className={styles.taskPriority}>
          Priority: <span className={styles.priorityModerate}>{priority == '1' ? 'Extreme' : priority == '2' ? 'Moderate' : 'Low'}</span>
        </div>
        <div className={styles.taskStatus}>
          Status: <span className={styles[`status${status.replace(' ', '')}`]}>{status == '1' ? "Pending" : status == '2' ? 'In Progress' : 'Completed'}</span>
        </div>
        <div className={styles.taskCreatedOn}>Created on: {moment(created_at,'ddd, DD MMM YYYY HH:mm:ss [GMT]').format('DD/MM/YYYY') }</div>
      </div>
    </article>
  )
}
