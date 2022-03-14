
import './app.scss';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
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
    <Routes>
      <Route path="*" element={(
        <Navigate to={`/${SCENERY_SECTION_ROUTE}`}/>
      )}/>
      <Route path={`/${SCENERY_SECTION_ROUTE}/*`} element={(
        <ScenerySection/>
      )}/>
    </Routes>
  );
}
