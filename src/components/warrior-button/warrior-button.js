import React from 'react';
import styles from './warrior-button.module.css';

function WarriorButton({ children, onClick, hoverIt }) {

    return (<button className={styles.warriorButton} onClick={onClick}>

        <span>{children}</span>

        <svg
            className={styles.svg1}
            version="1.1"
            baseProfile="full"
            width="300"
            height="50"
            xmlns="http://www.w3.org/2000/svg">

            <polyline points="25, 50 5, 25 25, 5 300, 10" stroke="#095f80" fill={hoverIt ? "#095f80" : "none"} strokeWidth="5" />
        </svg>

        <svg
            className={styles.svg2}
            version="1.1"
            baseProfile="full"
            width="300"
            height="80"
            xmlns="http://www.w3.org/2000/svg">

            <polyline points="10, 60 260, 65 300, 5 240, 0" stroke="#ffe800" fill={hoverIt ? "#ffe800" : "none"} strokeWidth="5" />
        </svg>

    </button>)
}

export { WarriorButton };