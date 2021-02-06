import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <>
            <h1 className={styles.heading}>برترین ها</h1>
            <div className={styles.filterContainer}>
                <p>با شکارچیان برتر در بازه‌ی زمانی دلخواهتون آشنا بشید.</p>
                <ul>
                    <li>مهر-آبان ۱۳۹۹ </li>
                    <li>آذر-دی ۱۳۹۹ </li>
                    <li>بهمن-اسفند ۱۳۹۹ </li>
                    <li>همیشه</li>
                </ul>
            </div>
        </>
    );
}
export default Header;
