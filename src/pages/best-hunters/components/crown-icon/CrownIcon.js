// @flow
import React from 'react';
import styles from './CrownIcon.module.css';

type Props={
    name: string;
}

function CrownIcon(props: Props) {
    const { name } = props;
    const iconSelector = () => {
        switch (name) {
        case 'good':
            return styles.good;
        case 'very good':
            return styles.veryGood;
        default:
            return styles.excellent;
        }
    };
    const classes = iconSelector();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className={classes}>
            <g fill="none" fillRule="evenodd">
                <g fill="#000" fillRule="nonzero">
                    <g>
                        <g>
                            <path d="M42.8 41v2.4c0 .663-.537 1.2-1.2 1.2H22.4c-.663 0-1.2-.537-1.2-1.2V41h21.6zM32 23c.454 0 .87.257 1.073.663l4.192 8.384 6.07-4.045c.407-.272.939-.269 1.343.008.405.277.6.772.494 1.25L42.83 39.8H21.17l-2.342-10.54c-.106-.478.09-.973.494-1.25s.936-.28 1.344-.008l6.069 4.045 4.192-8.384C31.13 23.257 31.546 23 32 23zm13.2 2.4c.663 0 1.2.537 1.2 1.2 0 .663-.537 1.2-1.2 1.2-.663 0-1.2-.537-1.2-1.2 0-.663.537-1.2 1.2-1.2zm-26.4 0c.663 0 1.2.537 1.2 1.2 0 .663-.537 1.2-1.2 1.2-.663 0-1.2-.537-1.2-1.2 0-.663.537-1.2 1.2-1.2zm13.2-6c.663 0 1.2.537 1.2 1.2 0 .663-.537 1.2-1.2 1.2-.663 0-1.2-.537-1.2-1.2 0-.663.537-1.2 1.2-1.2z" transform="translate(-611 -329) translate(410 329) translate(201)" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}
export default CrownIcon;
