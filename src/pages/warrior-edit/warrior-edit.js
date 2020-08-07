import React, { useState, Fragment } from 'react';
import styles from './warrior-edit.module.css';
import { Header, Footer, MainContainer, WarriorAvatar, WarriorButton, SectionTitle, HelperChipsContainer } from '../../components';
import Calendar from 'react-calendar'
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';


function WarriorEdit({ avatar, percent }) {


    const [startNow, setStartNow] = useState(true);
    const [startDate, setStartDate] = useState(new Date());


    avatar = avatar || "/images/default-avatar.png";
    percent = percent || (Math.random() * 100);


    function startNowHandler(event) {
        event.preventDefault();
        setStartDate(new Date())
        setStartNow(true);
    }

    function selectDateHandler(event) {
        event.preventDefault();
        setStartNow(false);
    }

    function dateChangeHandler(date) {
        setStartDate(date);
    }


    function saveHandler(event) {
        event.preventDefault();
    }

    const { warriorName } = useParams();

    return (<MainContainer>

        <div className={styles.warriorEditContainer}>


            <SectionTitle>{warriorName}</SectionTitle>

            <WarriorAvatar percent={percent} username={''} avatar={avatar} />

            <p>Lost your progress?</p>

            <WarriorButton hoverIt={startNow} onClick={startNowHandler}>
                {'Start Now'}
            </WarriorButton>

            <span>{'OR'}</span>

            <WarriorButton hoverIt={!startNow} onClick={selectDateHandler}>
                {'Select Date'}
            </WarriorButton>


            {!startNow ?
                <Calendar value={startDate} onChange={dateChangeHandler} />
                :
                null
            }


            <SectionTitle>{'Add / Remove helpers'}</SectionTitle>

            <HelperChipsContainer />


            <WarriorButton onClick={saveHandler}>
                {'Save'}
            </WarriorButton>

        </div>

    </MainContainer>)
}

export { WarriorEdit };