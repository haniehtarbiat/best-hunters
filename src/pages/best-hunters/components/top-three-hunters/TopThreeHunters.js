// @flow
import React from 'react';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';
import CrownIcon from 'pages/best-hunters/components/crown-icon/CrownIcon';
import styles from './TopThreeHunters.module.css';

type Props={
    bestHuntersList: Array
}

function TopThreeHunters(props: Props) {
    const { bestHuntersList } = props;
    return (
        <div className={styles.topThreeHuntersContainer}>
            <div className={styles.firstHunter}>
                <CrownIcon name="excellent" />
                <span>{bestHuntersList[0].userName}</span>
                <Avatar pic={bestHuntersList[0].avatar} size={120} />
            </div>
            <div className={styles.secondHunter}>
                <Avatar pic={bestHuntersList[1].avatar} size={120} />
                <div className={styles.InfoContainer}>
                    <div className={styles.hunterInfoContainer}>
                        <CrownIcon name="very good" />
                        <span>{bestHuntersList[1].userName}</span>
                    </div>
                </div>
            </div>
            <div className={styles.thirdHunter}>
                <div className={styles.InfoContainer}>
                    <div className={styles.hunterInfoContainer}>
                        <CrownIcon name="good" />
                        <span>{bestHuntersList[2].userName}</span>
                    </div>
                </div>
                <Avatar pic={bestHuntersList[2].avatar} size={120} />
            </div>
        </div>
    );
}
export default TopThreeHunters;
