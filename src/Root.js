import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, WarriorsPage, OneWarriorPage, LoginPage, SignupPage, HelpersPage, OneHelperPage, WarriorEdit } from './pages';


function Root() {

  return (<BrowserRouter>

    <Switch>

      <Route exact path="/"> <HomePage /> </Route>

      <Route exact path="/warriors"> <WarriorsPage /> </Route>
      <Route exact path="/warriors/edit/:warriorId"> <WarriorEdit />  </Route>

      <Route exact path="/warriors/login"> <LoginPage />  </Route>
      <Route exact path="/warriors/signup"> <SignupPage />  </Route>

      <Route exact path="/warriors/helpers"> <HelpersPage />   </Route>
      <Route exact path="/warriors/helpers/:helperId"> <OneHelperPage /> </Route>

      <Route exact path="/warriors/challenges/90Day">  <WarriorsPage />  </Route>
      <Route exact path="/warriors/challenges/180Day"> <WarriorsPage />  </Route>
      <Route exact path="/warriors/challenges/270Day"> <WarriorsPage />  </Route>
      <Route exact path="/warriors/challenges/360Day"> <WarriorsPage />  </Route>
      <Route exact path="/warriors/challenges/winners"><WarriorsPage /></Route>


      <Route exact path="/warriors/:warriorId"> <OneWarriorPage />  </Route>

    </Switch>

  </BrowserRouter>)
}

export default Root;
