// @flow
import React from 'react';
import styles from 'pages/best-hunters/components/filter/Filter.module.css';

type Props={
    filter: string,
    handleFilter: Function,
    status: boolean
};

function Filter(props: Props) {
    const { filter, handleFilter, status } = props;
    const classes = status ? `${styles.filter} ${styles.activeFilter}` : styles.filter;
    return (
        <li
            className={classes}
            onClick={() => {
                handleFilter(filter);
            }}
            onKeyDown={() => {
                handleFilter(filter);
            }}
            role="menuitem"
        >
            {filter}
        </li>
    );
}
export default Filter;
