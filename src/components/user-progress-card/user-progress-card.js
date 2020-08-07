import React, { useState, useEffect } from 'react';
import styles from './user-progress-card.module.css';
import { Link } from 'react-router-dom';
import { WarriorAvatar } from '../warrior-avatar/warrior-avatar';
import ClassNames from 'classnames/bind';

var cx = ClassNames.bind(styles);

function UserProgressCard({ avatar, daysCount, username, percent, startDate, index }) {

    const [screenWidth, setScreenWidth] = useState(0);

    avatar = avatar || "/images/default-avatar.png";
    percent = percent || (Math.random() * 100);
    daysCount = daysCount || 0;
    username = username || 'username';
    startDate = startDate || new Date().toDateString();
    index = index || 0;


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

        <div
            className={cx({
                cardContainer: true,
                cardContainerReverse: index % 2 != 0 ? true : false
            })}
            style={{
                flexDirection: index % 2 == 0 ? 'row' : 'row-reverse'
            }}>


            <WarriorAvatar percent={percent} username={'username'} avatar={avatar} />


            <aside>
                <p>Days Count {daysCount}</p>
                <p>Started on {startDate}</p>
            </aside>

        </div></Link >);
}


export { UserProgressCard };