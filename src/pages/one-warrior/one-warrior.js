import React, { Fragment } from 'react';
import { UserProgressCard, Header, Footer, MainContainer, SectionTitle, WarriorAvatar, HelperChip, HelperChipsContainer, WarriorButton } from '../../components';
import { useParams, Link } from 'react-router-dom';
import styles from './one-warrior.module.css';

function OneWarriorPage({ avatar, percent }) {

    const { warriorName } = useParams();

    avatar = avatar || "/images/default-avatar.png";
    percent = percent || (Math.random() * 100);


    return (<MainContainer>

        <div className={styles.oneWarriorContainer}>

            <SectionTitle>{warriorName}</SectionTitle>

            <WarriorAvatar percent={percent} username={''} avatar={avatar} />

            <p>{'25 Day Passed'}</p>

            <p>{'Started At: 25/7/2020 '}</p>


            <Link to="/warriors/helpers">
                <SectionTitle>Things That helped me</SectionTitle>
            </Link>

            <HelperChipsContainer />


            <WarriorButton><Link to={`/warriors/edit/${warriorName}`}>Edit</Link></WarriorButton>

        </div>

    </MainContainer>);
}


export { OneWarriorPage }