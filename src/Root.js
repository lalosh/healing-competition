import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { HomePage, WarriorsPage, OneWarriorPage, LoginPage, SignupPage, HelpersPage, OneHelperPage, WarriorEdit } from './pages';
import { useLocation, useHistory } from 'react-router-dom'
import { Header, Footer } from './components';
import ScrollToTop from './scrollToTop';



function MainRouter() {

  return (<BrowserRouter>

    <Header />

    <ScrollToTop>
      <Switch>

        <Route exact path="/"> <HomePage /> </Route>

        <Route exact path="/warriors"> <WarriorsPage /> </Route>
        <Route exact path="/warriors/edit/:warriorName"> <WarriorEdit />  </Route>

        <Route exact path="/warriors/login"> <LoginPage />  </Route>
        <Route exact path="/warriors/signup"> <SignupPage />  </Route>

        <Route exact path="/warriors/helpers"> <HelpersPage />   </Route>
        <Route exact path="/warriors/helpers/:helperName"> <OneHelperPage /> </Route>

        <Route exact path="/warriors/challenges/90Day">  <WarriorsPage />  </Route>
        <Route exact path="/warriors/challenges/180Day"> <WarriorsPage />  </Route>
        <Route exact path="/warriors/challenges/270Day"> <WarriorsPage />  </Route>
        <Route exact path="/warriors/challenges/360Day"> <WarriorsPage />  </Route>
        <Route exact path="/warriors/challenges/winners"><WarriorsPage /></Route>


        <Route exact path="/warriors/:warriorName"> <OneWarriorPage />  </Route>

      </Switch>
    </ScrollToTop>

    <Footer />

  </BrowserRouter>)
}



function Root() {


  return (<MainRouter />)

}

export default Root;
