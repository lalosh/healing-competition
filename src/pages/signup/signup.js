import React, { useState, Fragment } from 'react';
import { Header, Footer, MainContainer, WarriorInput, WarriorButton } from '../../components';
import styles from './signup.module.css';

import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';


function SignupPage() {

    const [startNow, setStartNow] = useState(true);
    const [startDate, setStartDate] = useState(new Date());


    const [warriorName, setWarriorName] = useState('');
    const [warriorPassword, setWarriorPassword] = useState('');


    function warriorNameOnChange(event) {
        setWarriorName(event.target.value);
    }

    function warriorPasswordOnChange(event) {
        setWarriorPassword(event.target.value);
    }

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

    function signupHandler(event) {
        event.preventDefault();
        console.log(warriorName, warriorPassword, startDate);
    }

    return (
        <div>
            <Header />

            <MainContainer>

                <p className={styles.pleaseLoginText}>Please enter your info to Signup</p>



                <form className={styles.form}>

                    <WarriorInput
                        value={warriorName}
                        onChange={warriorNameOnChange}
                        placeholder={"Warrior Name"}
                    />


                    <WarriorInput
                        value={warriorPassword}
                        onChange={warriorPasswordOnChange}
                        placeholder={"Warrior Password"}
                        type={"password"}
                    />

                    <WarriorButton hoverIt={startNow} onClick={startNowHandler}>
                        Start Now
                    </WarriorButton>

                    <span>OR</span>

                    <WarriorButton hoverIt={!startNow} onClick={selectDateHandler}>
                        Select Date
                    </WarriorButton>

                    {!startNow ?
                        <Calendar value={startDate} onChange={dateChangeHandler} />
                        :
                        null
                    }



                    <WarriorButton onClick={signupHandler}>
                        Signup
                    </WarriorButton>



                </form>

            </MainContainer>

            <Footer />
        </div>
    );
}


export { SignupPage }