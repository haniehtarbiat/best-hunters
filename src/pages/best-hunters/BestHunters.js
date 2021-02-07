import React, { useState } from 'react';
import { useQuery } from 'react-query';
import getHunters from 'pages/best-hunters/api/getHunters';
import FilterButton from 'pages/best-hunters/components/filter-button/FilterButton';
import styles from 'pages/best-hunters/BestHunters.module.css';
import TopThreeHunters from 'pages/best-hunters/components/top-three-hunters/TopThreeHunters';

const filters = ['مهر-آبان ۱۳۹۹', 'آذر-دی ۱۳۹۹ ', 'بهمن-اسفند ۱۳۹۹ ', 'همیشه'];

function BestHunters() {
    const { data, isLoading, isError } = useQuery('hunters', getHunters);
    let bestHuntersList = [];
    const [activeFilter, setActiveFilter] = useState(filters[filters.length - 1]);
    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };
    if (isLoading) {
        return (<div className={styles.Loading}>...isLoading</div>);
    }
    if (isError) {
        return (<div>error</div>);
    }
    if (data) {
        if (activeFilter === filters[filters.length - 1]) {
            bestHuntersList = data.filter((hunter) => hunter.hountingRate <= 3);
        }
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
                        <FilterButton
                            filter={filter}
                            handleFilter={handleFilter}
                            key={filter}
                            status={activeFilter === filter}
                        />
                    ))}
                </ul>
            </div>
            <TopThreeHunters bestHuntersList={bestHuntersList} />
        </div>
    );
}
export default BestHunters;
