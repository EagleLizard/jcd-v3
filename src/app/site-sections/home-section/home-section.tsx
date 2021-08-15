import './home-section.scss';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { TEST_EXPORT } from '@constants/gallery-constants';

interface HomeSectionProps {

}

export const homeSectionRoute = 'home';

const testSubroute = 'test-sub';

export function HomeSection(props: HomeSectionProps) {
  const routeMatch = useRouteMatch();
  return (
    <div className="home-section">
      <Link to={`/${homeSectionRoute}/${testSubroute}`}>
        Test Sub Route
      </Link>
      <Switch>
        <Route exact path={`/${homeSectionRoute}`}>
          Home
        </Route>
        <Route path={`/${homeSectionRoute}/${testSubroute}`}>
          Home, Test Sub Route {TEST_EXPORT}
        </Route>
      </Switch>
      ~home
    </div>
  );
}
