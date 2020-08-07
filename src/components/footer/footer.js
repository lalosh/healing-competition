import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../index.js';

function Footer() {
    return (<footer className={styles.footer} id="footer">


        <div className={styles.linksContainer}>
            <SectionTitle>Site Map</SectionTitle>

            <Link to="/warriors"> Warriors List </Link>
            <Link to="/warriors/challenges/90Day"> 90 Day Challenge</Link>
            <Link to="/warriors/challenges/180Day">180 Day Challenge</Link>
            <Link to="/warriors/challenges/270Day">270 Day Challenge</Link>
            <Link to="/warriors/challenges/360Day">360 Day Challenge</Link>
            <Link to="/warriors/challenges/winners">WINNERS</Link>
            <Link to="/warriors/helpers">Help Tools</Link>
        </div>


        <div className={styles.info}>

            <SectionTitle>Healing Competition</SectionTitle>
            <p>
                Healing competition is a web app that help addicted people to compete against each other and heal
        </p>
        </div>

    </footer>);
}

export { Footer };