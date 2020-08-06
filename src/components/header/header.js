import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {
    return (<header className={styles.header} style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* Healing Competition */}

        <Link to="/">home</Link>
        <Link to="/warriors/login">login</Link>
        <Link to="/warriors/signup">signup</Link>
        <Link to="/warriors/edit/4">warrior edit</Link>
        <Link to="/warriors">warriors</Link>
        <Link to="/warriors/5">one warrior</Link>
        <Link to="/warriors/challenges/90Day">90Day</Link>
        <Link to="/warriors/challenges/180Day">180Day</Link>
        <Link to="/warriors/challenges/270Day">270Day</Link>
        <Link to="/warriors/challenges/360Day">360Day</Link>
        <Link to="/warriors/challenges/winners">winners</Link>
        <Link to="/warriors/helpers">helpers</Link>
        <Link to="/warriors/helpers/4">one helper</Link>

    
    </header>);
}

export { Header }