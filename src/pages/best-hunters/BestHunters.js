import React, { useState } from 'react';
import { useQuery } from 'react-query';
import getHunters from 'pages/best-hunters/api/getHunters';
import { ReactComponent as ExpandMore } from 'assets/icons/expand-more.svg';
import FilterButton from 'pages/best-hunters/components/filter-button/FilterButton';
import TopThreeHunters from 'pages/best-hunters/components/top-three-hunters/TopThreeHunters';
import BestHuntersRow from 'pages/best-hunters/components/best-hunters-row/BestHuntersRow';
import styles from 'pages/best-hunters/BestHunters.module.css';

const filters = ['مهر-آبان ۱۳۹۹', 'آذر-دی ۱۳۹۹ ', 'بهمن-اسفند ۱۳۹۹ ', 'همیشه'];

function BestHunters() {
    const { data, isLoading, isError } = useQuery('hunters', getHunters);
    const [activeFilter, setActiveFilter] = useState(filters[filters.length - 1]);
    const [showAll, setShowAll] = useState(false);
    const handleFilter = (filter) => {
        setActiveFilter(filter);
    };
    const handleShowMore = () => {
        setShowAll(!showAll);
    };
    if (isLoading) {
        return (<div className={styles.loading}>...isLoading</div>);
    }
    if (isError) {
        return (<div>error</div>);
    }
    const buttonText = showAll ? ' کمتر ببین' : 'بیشتر ببین';
    const buttonStyle = showAll ? `${styles.showButton} ${styles.showLessButton}` : styles.showButton;
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
            <TopThreeHunters bestHuntersList={data} />
            <div className={styles.huntersTable}>
                <div className={styles.tableHeader}>
                    <div className={styles.headerRight}>
                        <span className={styles.smallContainer} />
                        <span className={styles.mediumContainer}>رتبه</span>
                        <span className={styles.largeContainer}>شکارچی</span>
                    </div>
                    <div className={styles.headerLeft}>
                        <span className={`${styles.largeContainer} ${styles.justifyCenter}`}>امتیاز</span>
                        <span className={styles.mediumContainer}>شمار گزارش‌ها</span>
                    </div>
                </div>
                <div>
                    {showAll ? data.map(
                        (info) => (
                            <BestHuntersRow key={info.id} hunterInfo={info} />),
                    ) : data.map(
                        (info, index) => (index <= 5
                            ? <BestHuntersRow key={info.id} hunterInfo={info} />
                            : null),
                    )}
                </div>
            </div>
            <button type="button" className={buttonStyle} onClick={handleShowMore}>
                {buttonText}
                <ExpandMore />
            </button>
        </div>
    );
}

export default BestHunters;
