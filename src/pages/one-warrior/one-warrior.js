import React from 'react';
import { UserProgressCard, Header, Footer, MainContainer, HelperChip, HelperChipsContainer } from '../../components';


function OneWarriorPage() {

    return (
        <div>
            <Header />

            <MainContainer>
                {[0].map((userInfo, index) => <UserProgressCard key={String(index)} index={index} />)}
            </MainContainer>

            <Footer />
        </div>
    );
}


export { OneWarriorPage }