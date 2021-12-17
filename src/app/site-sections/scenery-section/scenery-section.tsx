import './scenery-section.scss';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { SCENIC_PROJECTS } from '@constants/gallery-constants';
import { GalleryImage } from '../../models/gallery-image';
import { getScenicGallery } from '../../services/gallery-service';
import { SceneryPage, SCENERY_SECTION_ROUTE } from './scenery-page/scenery-page';

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
        <Route path={`/${SCENERY_SECTION_ROUTE}/${testSubroute}`}>
          Subroute Test
        </Route>
      </Switch>
    </div>
  );
}
