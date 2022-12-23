
import './top-nav.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { JCD_V3_LOGO_BUCKET_FILE, LOGO } from '../../constants/image-uris';
import { getResizedUri } from '../../services/gallery-service';
import { ART_SECTION_ROUTE } from '../../site-sections/art-section/art-section';
import { ABOUT_SECTION_ROUTE } from '../../site-sections/about-section/about-section';
import { SCENERY_SECTION_ROUTE } from '../../site-sections/scenery-section/scenic-page/scenic-page';
import { JcdV3Service } from '../../services/jcd-v3-service';

const LOGO_BASE_WIDTH = 500;
const LOGO_BASE_HEIGHT = 144;

type TopNavLink = {
  label: string;
  route: string;
};

type TopNavProps = {
  onMenuIconClick: () => void;
};

export const TOP_NAV_LINKS: TopNavLink[] = [
  {
    label: 'scenic',
    route: SCENERY_SECTION_ROUTE,
  },
  {
    label: 'art',
    route: ART_SECTION_ROUTE,
  },
  {
    label: 'janice',
    route: ABOUT_SECTION_ROUTE,
  },
];

export function TopNav(props: TopNavProps) {
  const [ logoUri, setLogoUri ] = useState<string>();

  useEffect(() => {
    let resizedLogoUri: string;
    resizedLogoUri = getResizedUri({
      uri: JcdV3Service.getImageUri(JCD_V3_LOGO_BUCKET_FILE),
      height: 64,
    });
    setLogoUri(resizedLogoUri);
  }, []);

  return (
    <div className="top-nav">
      <div className="top-nav-container">
        <Link
          to="/"
          className="logo-image-link"
        >
          <div className="logo-image">
            {logoUri && (
              <img
                src={logoUri}
              />
            )}
          </div>
        </Link>
        <div className="top-nav-links">
          {TOP_NAV_LINKS.map((topNavLink, idx) => {
            return (
              <div
                className="top-nav-link-container"
                key={idx}
              >
                <Link
                  to={topNavLink.route}
                  className="top-nav-link"
                >
                  {
                    topNavLink.label
                  }
                </Link>
              </div>
            );
          })}
        </div>
        <div className="top-nav-drawer-toggle-container">
          <div
            className="menu-icon-container"
            onClick={() => {
              handleMenuIconClick();
            }}
          >
            <MenuIcon
              className="menu-toggle-icon"
              fontSize="large"
            />
          </div>
        </div>
      </div>
      <div className="dev-screen-size">
        <div className="screen wide">
            wide
        </div>
        <div className="screen medium">
            medium
        </div>
        <div className="screen small">
            small
        </div>
        <div className="screen phone">
            phone
        </div>
      </div>
    </div>
  );

  function handleMenuIconClick() {
    props.onMenuIconClick();
  }
}
