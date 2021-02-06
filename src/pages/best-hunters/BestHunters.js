import React from 'react';
import styles from 'pages/best-hunters/BestHunters.module.css';

function BestHunters() {
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.heading}>برترین ها</h1>
            </header>
            <div className={styles.filterContainer}>
                <p>با شکارچیان برتر در بازه‌ی زمانی دلخواهتون آشنا بشید.</p>
                <ul>
                    <li>مهر-آبان ۱۳۹۹ </li>
                    <li>آذر-دی ۱۳۹۹ </li>
                    <li>بهمن-اسفند ۱۳۹۹ </li>
                    <li>همیشه</li>
                </ul>
            </div>
        </div>
    );
}
export default BestHunters;
