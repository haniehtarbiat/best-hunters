import React from 'react';
import styles from 'pages/best-hunters/BestHunters.module.css';
import Filter from 'pages/best-hunters/components/filter/filter';

const filtersArray = ['مهر-آبان ۱۳۹۹', 'آذر-دی ۱۳۹۹ ', 'بهمن-اسفند ۱۳۹۹ ', 'همیشه'];

function BestHunters() {
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.heading}>برترین ها</h1>
            </header>
            <div className={styles.filterContainer}>
                <p>با شکارچیان برتر در بازه‌ی زمانی دلخواهتون آشنا بشید.</p>
                <ul>
                    {filtersArray.map((filter, index) => (
                        <Filter
                            filter={filter}
                            key={filter}
                            status={index === (filtersArray.length) - 1}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default BestHunters;
