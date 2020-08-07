import React from 'react';
import styles from './warrior-avatar.module.css';

function WarriorAvatar({ percent, username, avatar }) {
    percent = percent || 0;

    const circleRadius = 60;
    const circumference = 2 * Math.PI * circleRadius;
    const finished = (percent / 100) * circumference;
    const strokeWidth = 5;

    return (
        <div className={styles.personAvatarContainer}>

            <svg
                style={{ width: `${(circleRadius * 2) + (strokeWidth * 2)}px` }}
                version="1.1"
                baseProfile="full"
                width={String((circleRadius * 2) + (strokeWidth * 2))}
                height={String((circleRadius * 2) + (strokeWidth * 2))}
                xmlns="http://www.w3.org/2000/svg">

                <image href={avatar} x="10" y="10" height={`${((circleRadius * 2) - 10)}px`} width={`${((circleRadius * 2) - 10)}px`} />


                <circle
                    cx={String(circleRadius + (strokeWidth / 2))}
                    cy={String(circleRadius + (strokeWidth / 2))}
                    r={String(circleRadius)}
                    fill="transparent"
                    stroke="#095f80"
                    strokeWidth={String(strokeWidth)}
                    style={{
                        strokeDasharray: `${finished} ${circumference}`,
                        // strokeDashoffset: `${-100}`
                    }}
                />

            </svg>

            <p>{username}</p>
        </div>
    )
}

export { WarriorAvatar }