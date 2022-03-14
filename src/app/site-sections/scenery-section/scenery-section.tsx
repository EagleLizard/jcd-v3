import './scenery-section.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SceneryPage, SCENERY_SECTION_ROUTE } from './scenery-page/scenery-page';
import { SceneryGalleryPage } from './scenery-gallery-page/scenery-gallery-page';

interface HomeSectionProps {

}

export function ScenerySection(props: HomeSectionProps) {

  return (
    <div className="home-section">
      <Routes>
        <Route path='/' element={(
          <SceneryPage/>
        )}/>
        <Route path=':scenicPage' element={(
          <SceneryGalleryPage/>
        )}/>
      </Routes>
    </div>
  );
}
