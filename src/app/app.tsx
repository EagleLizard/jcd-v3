
import './app.scss';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeSection, homeSectionRoute } from './site-sections/home-section/home-section';

interface AppProps {

}

export function App(props: AppProps) {
  return (
    <div className="app-main">
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${homeSectionRoute}`}/>
        </Route>
        <Route path={`/${homeSectionRoute}`}>
          <HomeSection/>
        </Route>
      </Switch>
    </div>
  );
}
