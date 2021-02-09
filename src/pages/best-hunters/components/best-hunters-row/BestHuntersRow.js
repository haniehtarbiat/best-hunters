// @flow
import React from 'react';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';
import CrownIcon from 'pages/best-hunters/components/crown-icon/CrownIcon';
import styles from 'pages/best-hunters/components/best-hunters-row/BestHuntersRow.module.css';

type Props={
    hunterInfo: Array
}

function BestHuntersRow(props: Props) {
    const { hunterInfo } = props;
    const iconSelector = () => {
        switch (hunterInfo.hountingRate) {
        case 1:
            return <CrownIcon name="excellent" />;
        case 2:
            return <CrownIcon name="very good" />;
        default:
            return <CrownIcon name="good" />;
        }
    };
    const icon = hunterInfo.hountingRate <= 3 ? iconSelector() : null;
    return (
        <div className={styles.tableRow}>
            <div className={styles.cellRight}>
                <span className={styles.smallContainer}>{icon}</span>
                <span className={styles.mediumContainer}>{hunterInfo.hountingRate.toLocaleString('fa-IR')}</span>
                <div className={styles.largeContainer}>
                    <Avatar pic={hunterInfo.avatar} size="40px" />
                    <span>{hunterInfo.userName}</span>
                </div>
            </div>
            <div className={styles.cellLeft}>
                <span className={`${styles.largeContainer} ${styles.justifyCenter}`}>{hunterInfo.score.toLocaleString('fa-IR')}</span>
                <span className={`${styles.mediumContainer} ${styles.justifyCenter}`}>{hunterInfo.reportNumber.toLocaleString('fa-IR')}</span>
            </div>
        </div>
    );
}

export default BestHuntersRow;
