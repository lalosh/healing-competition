import React, { useState, useEffect } from 'react';
import styles from './user-progress-card.module.css';
import { Link } from 'react-router-dom';


function UserProgressCard({ avatar, daysCount, username, percent, startDate, index }) {

    const [screenWidth, setScreenWidth] = useState(0);

    avatar = avatar || "/images/default-avatar.png";
    daysCount = daysCount || 0;
    percent = percent || (Math.random() * 100);
    username = username || 'username';
    startDate = startDate || new Date().toDateString();
    index = index || 0;


    const circleRadius = 60;
    const circumference = 2 * Math.PI * circleRadius;
    const finished = (percent / 100) * circumference;
    const strokeWidth = 5;



    useEffect(() => {

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry && entry.contentBoxSize[0]) {
                    const screenWidth = entry.contentBoxSize[0].inlineSize;
                    setScreenWidth(screenWidth);
                }
            }
        });

        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.unobserve(document.body);
        }
    });



    return (<Link to={`/warriors/${username}`} className={styles.linkContainer}>
        
        <div className={styles.cardContainer} style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }}>


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



        <aside style={{
            width: screenWidth > 768 ?
                `calc(100% - ${2 * ((circleRadius * 2) + (strokeWidth * 2))}px)`
                :
                `calc(100% - ${1 * ((circleRadius * 2) + (strokeWidth * 2))}px)`
        }}>
            <p>Days Count {daysCount}</p>
            <p>Started on {startDate}</p>
        </aside>

    </div></Link>);
}


export { UserProgressCard };