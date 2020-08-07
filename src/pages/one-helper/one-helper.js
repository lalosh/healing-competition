import React, { Fragment } from 'react';
import styles from './one-helper.module.css';
import { Header, MainContainer, Footer, SectionTitle, WarriorAvatar } from '../../components';
import { useParams, Link } from 'react-router-dom';

function OneHelperPage() {

    const { helperName } = useParams();
    const avatar = "/images/default-avatar.png";
    const percent = (Math.random() * 100);

    return (<MainContainer>

        <SectionTitle>{'Helper Tool'}</SectionTitle>

        <h1 className={styles.helperName}>{helperName}</h1>


        <SectionTitle>{'It also helped'}</SectionTitle>

        <div className={styles.warriorsContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((x => (
                <Link to={`/warriors/username`} key={String(x)}>
                    <WarriorAvatar percent={percent} username={'username'} avatar={avatar} />
                </Link>
            )))}
        </div>

    </MainContainer>);
}

export { OneHelperPage };