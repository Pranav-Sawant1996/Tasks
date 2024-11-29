import React from 'react'
import styles from '../../../style/myTask.module.css'
import moment from 'moment'




export default function MyTaskList({ tasks, setSelectedTask }) {
    return (
        <section className={styles.taskList}>
            <div className={styles.taskListContent}>
                <h2 className={styles.taskListTitle}>My Tasks</h2>
                <div className={styles.taskListDivider}></div>
                {tasks.map((task, index) => (
                    <div key={index} className={styles.taskItem} onClick={()=>setSelectedTask(task)}>
                        <div className={styles.taskInfo}>
                            <div className={styles.task}>
                                <div className={styles.short_task}>
                                    <div className={styles.taskTitle}>
                                        <h3>{task.task_title}</h3>
                                    </div>
                                    <p className={styles.taskDescription}>{task.description}</p>
                                </div>
                                
                            </div>
                            <div className={styles.taskMeta}>
                                <div className={styles.taskMeta}>
                                    <span className={styles.taskPriority}>
                                        Priority: <span style={{ color: task.priority === 'Extreme' ? '#f21e1e' : '#42ade2' }}>{task.priority == '1' ? 'Extreme' : task.priority == '2' ? 'Moderate' : 'Low'}</span>
                                    </span>
                                    <span className={styles.taskStatus}>
                                        Status: <span style={{ color: task.status === 'Not Started' ? '#f21e1e' : '#0225ff' }}>{task.status == '1' ? "Pending" : task.status == '2' ? 'In Progress' : 'Completed'}</span>
                                    </span>
                                    <span className={styles.taskCreationDate}>
                                        Created on: {moment(task.created_at, 'ddd, DD MMM YYYY HH:mm:ss [GMT]').format('DD/MM/YYYY')}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
