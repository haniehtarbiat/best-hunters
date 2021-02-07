// @flow
import React from 'react';
import styles from './Avatar.module.css';

type Props={
    pic: string,
size: number
};

function Avatar(props: Props) {
    const { pic, size } = props;
    return (
        <img className={styles.clip} width={size} height={size} src={pic} alt="avatar" />
    );
}
export default Avatar;
