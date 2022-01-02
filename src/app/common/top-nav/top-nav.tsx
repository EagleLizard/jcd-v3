
import './top-nav.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { LOGO } from '../../constants/image-uris';
import { getResizedUri } from '../../services/gallery-service';

const LOGO_BASE_WIDTH = 500;
const LOGO_BASE_HEIGHT = 144;

interface TopNavProps {

}

export function TopNav(props: TopNavProps) {
  const [ logoUri, setLogoUri ] = useState<string>();

  useEffect(() => {
    let resizedLogoUri: string;
    resizedLogoUri = getResizedUri({
      uri: LOGO,
      width: LOGO_BASE_WIDTH,
      height: LOGO_BASE_HEIGHT,
    });
    setLogoUri(resizedLogoUri);
  }, []);

  return (
    <div className="top-nav">
      <Link to="/">
        <div className="logo-image">
          {logoUri && (
            <img
              src={logoUri}
            />
          )}
        </div>
      </Link>
    </div>
  );
}
