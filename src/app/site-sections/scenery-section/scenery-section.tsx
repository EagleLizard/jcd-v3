import './scenery-section.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SceneryPage, SCENERY_SECTION_ROUTE } from './scenery-page/scenery-page';
import { SceneryGalleryPage } from './scenery-gallery-page/scenery-gallery-page';

interface HomeSectionProps {

}

export function ScenerySection(props: HomeSectionProps) {

  return (
    <div className="home-section">
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
