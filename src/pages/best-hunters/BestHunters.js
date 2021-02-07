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
        async () => getHunters,
    );
    console.log(data);
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
            <Avatar pic="" size={120} />
        </div>
    );
}
export default BestHunters;
