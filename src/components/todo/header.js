import React from 'react'
import styles from "../../style/dashboard.module.css"
import moment from 'moment'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <span className={styles.logoHighlight}>Dash</span>board
            </h1>
            {/* <form className={styles.searchForm}>
                <label htmlFor="searchInput" className={styles.visuallyHidden}>Search your task here</label>
                <input type="text" id="searchInput" className={styles.searchInput} placeholder="Search your task here..." />
                <button type="submit" className={styles.searchButton}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3a80eebeae8480f4f8f7ad7961d9eaa56dac5bace7d51828faf82a4528cb64?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="Search" className={styles.searchIcon} />
                </button>
            </form> */}
            <div className={styles.userActions}>
                {/* <button className={styles.notificationButton}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb794e5c83f8fd54d1e0cbb0b27f7deaca0bbf119d8eadf68a59bb71f508393?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="Notifications" className={styles.notificationIcon} />
                </button> */}
                {/* <button className={styles.messageButton}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/687a8ef2b78d3f9e5363565d1dadf5de32ca82c5a004b514cfbbb38b85d83fb0?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="Messages" className={styles.messageIcon} />
                </button> */}
            </div>
            <div className={styles.dateInfo}>
                <p className={styles.currentDay}>{moment().format('dddd')}</p>
                <p className={styles.currentDate}>{moment().format('DD/MM/YYYY')}</p>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/252928e26d74b1f5076db29d1b7128dab50694cf770f60c908df48abbfe011b3?placeholderIfAbsent=true&apiKey=3e9ce65a9ab94df0a79d76628e51f49a" alt="User profile" className={styles.userAvatar} />
        </header>
    )
}
