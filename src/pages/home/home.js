import React, { Fragment, useEffect } from 'react';
import { UserProgressCard, Header, Footer, MainContainer, HelperChip, HelperChipsContainer, SectionTitle } from '../../components';
import { Link, useHistory } from 'react-router-dom';


function HomePage() {



    return (<Fragment>

        <MainContainer>

            <SectionTitle>Top Warriors</SectionTitle>

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((userInfo, index) => <UserProgressCard key={String(index)} index={index} />)}

        </MainContainer>

        <MainContainer>

            <Link to="/warriors/helpers">
                <SectionTitle>Things That helped me</SectionTitle>
            </Link>

            <HelperChipsContainer />

        </MainContainer>


    </Fragment>);
}


export { HomePage }