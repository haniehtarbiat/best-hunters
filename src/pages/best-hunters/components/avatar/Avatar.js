// @flow
import React from 'react';
import styles from './Avatar.module.css';

type Props={
    pic: string,
    size: number
};

function Avatar(props: Props) {
    const { pic, size } = props;
    const containerStyle = { width: size, height: size };
    return (
        <div className={styles.clipContainer} style={containerStyle}>
            <img className={styles.clip} width={size} height={size} src={pic} alt="avatar" />
        </div>
    );
}

export default Avatar;
