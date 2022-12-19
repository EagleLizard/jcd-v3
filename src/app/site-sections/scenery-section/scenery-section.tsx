
import './scenery-section.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SceneryPage } from './scenery-page/scenery-page';
import { SceneryGalleryPage } from './scenery-gallery-page/scenery-gallery-page';
import { ScenicProjectPage } from './scenic-project-page/scenic-project-page';

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
          <>
            <ScenicProjectPage/>
            {/* <SceneryGalleryPage/> */}
          </>
        )}/>
      </Routes>
    </div>
  );
}
