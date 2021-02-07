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
            {
                bestHuntersList.map((info, index) => (
                    index > 0
                        ? (
                            <div
                                key={info.userName}
                                className={
                                    index > 1 && index < 3
                                        ? styles.thirdHunter
                                        : styles.secondHunter
                                }
                            >
                                <div>
                                    { index > 1 && index < 3
                                        ? <Leader2 /> : <Leader3 /> }
                                    <span>{info.userName}</span>
                                </div>
                                <Avatar pic={info.avatar} size={120} />
                            </div>
                        )
                        : (
                            <div
                                className={styles.firstHunter}
                                key={info.userName}
                            >
                                <Leader1 />
                                <span>{info.userName}</span>
                                <Avatar pic={info.avatar} size={120} />
                            </div>
                        )
                ))
            }
        </div>
    );
}
export default TopThreeHunters;
