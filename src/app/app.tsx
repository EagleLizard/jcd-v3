
import './app.scss';
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { ScenerySection } from './site-sections/scenery-section/scenery-section';
import { SCENERY_SECTION_ROUTE } from './site-sections/scenery-section/scenic-page/scenic-page';
import { TopNav, TOP_NAV_LINKS } from './common/top-nav/top-nav';
import { ArtSection, ART_SECTION_ROUTE } from './site-sections/art-section/art-section';
import { AboutSection, ABOUT_SECTION_ROUTE } from './site-sections/about-section/about-section';
import { Link } from 'react-router-dom';
import { JcdFooter } from './common/jcd-footer/jcd-footer';

interface AppProps {

}

export function JcdApp(props: AppProps) {

  const [ drawerOpen, setDrawerOpen ] = useState<boolean>(false);

  return (
    <div className="app-main">
      <div className="top-nav-container">
        <TopNav
          onMenuIconClick={handleMenuIconClick}
        />
      </div>
      <div className="app-content-container">
        <JcdAppRouter/>
      </div>
      <div className="footer-container">
        <JcdFooter/>
      </div>
      <SwipeableDrawer
        anchor="right"
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        open={drawerOpen}
      >
        <div className="jcd-drawer-nav">
          {TOP_NAV_LINKS.map((navLink, idx) => {
            return (
              <div
                key={idx}
                className="drawer-nav-list-item"
              >
                <Link
                  to={navLink.route}
                  onClick={() => {
                    setDrawerOpen(false);
                  }}
                  className="drawer-nav-link"
                >
                  <div className="nav-link-label">
                    {navLink.label}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </SwipeableDrawer>
    </div>
  );
  function handleDrawerOpen() {
    setDrawerOpen(true);
  }
  function handleDrawerClose() {
    setDrawerOpen(false);
  }
  function handleMenuIconClick() {
    setDrawerOpen(true);
  }
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
      <Route path={`/${ART_SECTION_ROUTE}/*`} element={(
        <ArtSection/>
      )}/>
      <Route path={`/${ABOUT_SECTION_ROUTE}/*`} element={(
        <AboutSection/>
      )}/>
    </Routes>
  );
}
