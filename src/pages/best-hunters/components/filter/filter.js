// @flow
import React, { useState } from 'react';
import styles from 'pages/best-hunters/components/filter/Filter.module.css';

type Props={
    filter: string,
    status: boolean
};

function Filter(props: Props) {
    const { filter, status } = props;
    const [active, setActive] = useState(status);
    const handleClick = () => {
        console.log('yyyy');
        setActive(true);
    };
    const classes = active ? `${styles.filter} ${styles.activeFilter}` : styles.filter;
    return (
        <li
            className={classes}
            onClick={handleClick}
            onKeyDown={handleClick}
            role="menuitem"
        >
            {filter}
        </li>
    );
}
export default Filter;
