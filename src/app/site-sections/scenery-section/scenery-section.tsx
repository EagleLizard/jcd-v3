
import './scenery-section.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScenicPage } from './scenic-page/scenic-page';
import { ScenicProjectPage } from './scenic-project-page/scenic-project-page';

interface HomeSectionProps {

}

export function ScenerySection(props: HomeSectionProps) {

  return (
    <div className="home-section">
      <Routes>
        <Route path='/' element={(
          <ScenicPage/>
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
