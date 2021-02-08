// @flow
import React from 'react';
import styles from 'pages/best-hunters/components/best-hunters-row/BestHuntersRow.module.css';

type Props={
    hunterInfo: Array
}

function BestHuntersRow(props: Props) {
    const { hunterInfo } = props;
    return (
        <tr className={styles.row}>
            <td>{hunterInfo.hountingRate}</td>
            <td>{hunterInfo.hountingRate}</td>
            <td>{hunterInfo.userName}</td>
            <td>{hunterInfo.score}</td>
            <td>{hunterInfo.reportNumber}</td>
        </tr>
    );
}
export default BestHuntersRow;
