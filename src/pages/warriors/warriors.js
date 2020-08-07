import React from 'react';
import { UserProgressCard, Header, Footer, MainContainer, HelperChip, HelperChipsContainer, SectionTitle } from '../../components';
import { useLocation, Link } from 'react-router-dom';


function WarriorsPage() {

    const location = useLocation();
    console.log(location.pathname); //determine route then fetch needed data

    return (<MainContainer>
        
        <SectionTitle>YYY Day Challenge</SectionTitle>

        {[0, 1, 2, 3, 4, 5].map((userInfo, index) => <UserProgressCard key={String(index)} index={index} />)}

        <Link to="#"><SectionTitle>Next Page</SectionTitle></Link>
        <Link to="#"><SectionTitle>Previous Page</SectionTitle></Link>

    </MainContainer>);
}


export { WarriorsPage }