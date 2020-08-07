import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {
    return (<header className={styles.header}>

        <Link to="/#footer">{'about'}</Link>

        <Link to="/"><h1>{'Healing Competition'}</h1></Link>

        <Link to="/warriors/login">{'Login'}</Link>


    </header>);
}

export { Header }