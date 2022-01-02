
import './app.scss';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ScenerySection } from './site-sections/scenery-section/scenery-section';
import { SCENERY_SECTION_ROUTE } from './site-sections/scenery-section/scenery-page/scenery-page';
import { TopNav } from './common/top-nav/top-nav';

interface AppProps {

}

export function JcdApp(props: AppProps) {
  return (
    <div className="app-main">
      <div className="top-nav-container">
        <TopNav/>
      </div>
      <div className="app-content-container">
        <JcdAppRouter/>
      </div>
    </div>
  );
}

function JcdAppRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`/${SCENERY_SECTION_ROUTE}`}/>
      </Route>
      <Route path={`/${SCENERY_SECTION_ROUTE}`}>
        <ScenerySection/>
      </Route>
    </Switch>
  );
}
