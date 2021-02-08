// @flow
import React from 'react';
import { ReactComponent as Leader2 } from 'assets/icons/leader-board-2.svg';
import { ReactComponent as Leader3 } from 'assets/icons/leader-board-3.svg';
import { ReactComponent as Leader1 } from 'assets/icons/leader-board-1.svg';
import styles from 'pages/best-hunters/components/best-hunters-row/BestHuntersRow.module.css';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';

type Props={
    hunterInfo: Array
}

function BestHuntersRow(props: Props) {
    const { hunterInfo } = props;
    const iconSelector = () => {
        switch (hunterInfo.hountingRate) {
        case 1:
            return <Leader1 />;
        case 2:
            return <Leader2 />;
        default:
            return <Leader3 />;
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
