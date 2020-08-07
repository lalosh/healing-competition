import React from 'react';
import styles from './helpers.module.css';
import { Header, MainContainer, Footer, SectionTitle, HelperChipsContainer } from '../../components';

function HelpersPage() {

    return (<MainContainer>

        <SectionTitle>{'What helped people'}</SectionTitle>

        <HelperChipsContainer />

    </MainContainer>);
}

export { HelpersPage };