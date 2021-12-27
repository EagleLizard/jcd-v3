import './scenery-section.scss';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { SceneryPage, SCENERY_SECTION_ROUTE } from './scenery-page/scenery-page';
import { SceneryGalleryPage } from './scenery-gallery-page/scenery-gallery-page';

interface HomeSectionProps {

}

const testSubroute = 'test-sub';

export function ScenerySection(props: HomeSectionProps) {
  const routeMatch = useRouteMatch();

  return (
    <div className="home-section">
      <Link to={`/${SCENERY_SECTION_ROUTE}/${testSubroute}`}>
        Test Sub Route
      </Link>
      <Switch>
        <Route exact path={`/${SCENERY_SECTION_ROUTE}`}>
          <SceneryPage/>
        </Route>
        <Route path={`/${SCENERY_SECTION_ROUTE}/:scenicPage`}>
          <SceneryGalleryPage/>
        </Route>
      </Switch>
    </div>
  );
}
