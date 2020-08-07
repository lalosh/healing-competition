import React, { useState } from 'react';
import { Header, Footer, MainContainer, WarriorInput, WarriorButton } from '../../components';
import styles from './login.module.css';
import { Link } from 'react-router-dom';


function LoginPage() {

    const [warriorName, setWarriorName] = useState('');
    const [warriorPassword, setWarriorPassword] = useState('');


    function warriorNameOnChange(event) {
        setWarriorName(event.target.value);
    }

    function warriorPasswordOnChange(event) {
        setWarriorPassword(event.target.value);
    }

    return (<MainContainer>

        <p className={styles.pleaseLoginText}>Please enter your warrior identity to login</p>

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


            <WarriorButton>Login</WarriorButton>

            <span>OR</span>

            <WarriorButton> <Link to="/warriors/signup"> Signup </Link> </WarriorButton>


        </form>

    </MainContainer>);
}


export { LoginPage }