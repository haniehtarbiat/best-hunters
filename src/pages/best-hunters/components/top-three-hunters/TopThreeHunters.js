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
    const [firstHunter, secondHunter, ThirdHunter] = bestHuntersList;
    return (
        <div className={styles.topThreeHuntersContainer}>
            <div className={styles.firstHunter}>
                <CrownIcon name="excellent" />
                <span>{firstHunter.userName}</span>
                <Avatar pic={firstHunter.avatar} size={120} />
            </div>
            <div className={styles.secondHunter}>
                <Avatar pic={secondHunter.avatar} size={120} />
                <div className={styles.infoContainer}>
                    <div className={styles.hunterInfoContainer}>
                        <CrownIcon name="very good" />
                        <span>{secondHunter.userName}</span>
                    </div>
                </div>
            </div>
            <div className={styles.thirdHunter}>
                <div className={styles.InfoContainer}>
                    <div className={styles.hunterInfoContainer}>
                        <CrownIcon name="good" />
                        <span>{ThirdHunter.userName}</span>
                    </div>
                </div>
                <Avatar pic={ThirdHunter.avatar} size={120} />
            </div>
        </div>
    );
}

export default TopThreeHunters;
