import React from 'react'
import styles from "../../../style/addTask.module.css"


export default function TaskImage() {
    return (
        <section className={styles.imageUpload}>
            <h2 className={styles.uploadTitle}>Upload Image</h2>
            <div className={styles.uploadArea}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e60011e65eb6eaacb0ee8a425869aa4091a3d17b814f1d36224f617d55d0bab?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="" className={styles.uploadIcon} />
                <p className={styles.uploadText}>Drag&Drop files here</p>
                <p className={styles.uploadOr}>or</p>
                <label htmlFor="fileInput" className={styles.browseButton}>
                    Browse
                    <input type="file" id="fileInput" className={styles.fileInput} />
                </label>
            </div>
        </section>
    )
}
