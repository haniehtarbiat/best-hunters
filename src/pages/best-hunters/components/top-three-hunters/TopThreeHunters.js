// @flow
import React from 'react';
import Avatar from 'pages/best-hunters/components/avatar/Avatar';
import { ReactComponent as Leader2 } from 'assets/icons/leader-board-2.svg';
import { ReactComponent as Leader3 } from 'assets/icons/leader-board-3.svg';
import { ReactComponent as Leader1 } from 'assets/icons/leader-board-1.svg';
import styles from './TopThreeHunters.module.css';

type Props={
    bestHuntersList: Array
}

function TopThreeHunters(props: Props) {
    const { bestHuntersList } = props;
    return (
        <div className={styles.topThreeHuntersContainer}>
            <div className={styles.firstHunter}>
                <Leader1 />
                <span>{bestHuntersList[0].userName}</span>
                <Avatar pic={bestHuntersList[0].avatar} size={120} />
            </div>
            <div className={styles.secondHunter}>
                <Avatar pic={bestHuntersList[1].avatar} size={120} />
                <div>
                    <Leader2 />
                    <span>{bestHuntersList[1].userName}</span>
                </div>
            </div>
            <div className={styles.thirdHunter}>
                <div>
                    <Leader3 />
                    <span>{bestHuntersList[2].userName}</span>
                </div>
                <Avatar pic={bestHuntersList[2].avatar} size={120} />
            </div>
        </div>
    );
}
export default TopThreeHunters;
