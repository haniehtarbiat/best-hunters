// @flow
import React from 'react';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';
import styles from 'pages/best-hunters/components/best-hunters-row/BestHuntersRow.module.css';
import CrownIcon from 'pages/best-hunters/components/crown-icon/CrownIcon';

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
        <tr className={styles.tableRow}>
            <td>{icon}</td>
            <td>{hunterInfo.hountingRate.toLocaleString('fa-IR')}</td>
            <td className={styles.avatarCell}>
                <Avatar pic={hunterInfo.avatar} size="40px" />
                <span>{hunterInfo.userName}</span>
            </td>
            <td />
            <td>{hunterInfo.score.toLocaleString('fa-IR')}</td>
            <td>{hunterInfo.reportNumber.toLocaleString('fa-IR')}</td>
        </tr>
    );
}

export default BestHuntersRow;
