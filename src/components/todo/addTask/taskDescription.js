import React from 'react'
import styles from "../../../style/addTask.module.css"


export default function TaskDescription() {
    return (
        <section className={styles.taskDescription}>
            <label htmlFor="description" className={styles.label}>Task Description</label>
            <textarea
                id="description"
                className={styles.descriptionInput}
                placeholder="Start writing here....."
            ></textarea>
        </section>
    )
}
