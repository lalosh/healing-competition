import React from 'react';
import { UserProgressCard, Header, Footer, MainContainer, HelperChip, HelperChipsContainer } from './components';

function App() {

  return (
    <div>
      <Header />

      <MainContainer>
        {[0, 1].map((userInfo, index) => <UserProgressCard key={String(index)} index={index} />)}
      </MainContainer>

      <MainContainer>
        <HelperChipsContainer />

      </MainContainer>

      <Footer />
    </div>
  );
}

export default App;
