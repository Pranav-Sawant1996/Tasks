import React from 'react'
import styles from "../../../style/addTask.module.css"


export default function Header({ handleCloseAddTask, headerTitle }) {
    return (
        <header className={styles.header}>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{headerTitle}</h3>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e312da3ccc3a416ce9e78e479598836d3eddcd682c911770e9949bcc83f3a402?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="" className={styles.logo} />
            </div>
            <button className={styles.backButton} onClick={handleCloseAddTask} >Go Back</button>
        </header>
    )
}
