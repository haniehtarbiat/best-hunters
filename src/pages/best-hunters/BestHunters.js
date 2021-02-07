import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Filter from 'pages/best-hunters/components/filter/Filter';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';
import styles from 'pages/best-hunters/BestHunters.module.css';
import getHunters from 'pages/best-hunters/api/getHunters';

const filters = ['مهر-آبان ۱۳۹۹', 'آذر-دی ۱۳۹۹ ', 'بهمن-اسفند ۱۳۹۹ ', 'همیشه'];

function BestHunters() {
    const [activeFilter, setActiveFilter] = useState(filters[filters.length - 1]);
    const {
        data, isLoading, isError,
    } = useQuery(
        'hunters',
        getHunters,
    );
    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };
    if (isLoading) {
        return (<div>...isLoading</div>);
    }
    if (isError) {
        return (<div>error</div>);
    }
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.heading}>برترین ها</h1>
            </header>
            <div className={styles.filterContainer}>
                <p>با شکارچیان برتر در بازه‌ی زمانی دلخواهتون آشنا بشید.</p>
                <ul>
                    {filters.map((filter) => (
                        <Filter
                            filter={filter}
                            handleFilter={handleFilter}
                            key={filter}
                            status={activeFilter === filter}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.topThreeHuntersContainer}>
                {data.filter((hunter) => hunter.hountingRate <= 3)
                    .map((info, index) => (
                        index > 0
                            ? (
                                <div
                                    key={info.userName}
                                    className={
                                        index > 1 && index < 3
                                            ? styles.thirdHunter
                                            : styles.secondHunter
                                    }
                                >
                                    <Avatar pic={info.avatar} size={120} />
                                </div>
                            )
                            : (
                                <div
                                    key={info.userName}
                                >
                                    <Avatar pic={info.avatar} size={120} />
                                </div>
                            )
                    ))}
            </div>
        </div>
    );
}
export default BestHunters;
