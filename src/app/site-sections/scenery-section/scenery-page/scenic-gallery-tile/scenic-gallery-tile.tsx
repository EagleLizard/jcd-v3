
import './scenic-gallery-tile.scss';
import React, { useEffect, useState } from 'react';

import { GalleryImage } from '../../../../models/gallery-image';
import { getResizedUri } from '../../../../services/gallery-service';
import { Gallery } from '../../../../models/gallery';
import { Link, useRouteMatch } from 'react-router-dom';

interface ScenicGalleryTileProps {
  gallery: Gallery;
}

export function ScenicGalleryTile(props: ScenicGalleryTileProps) {
  const [ previewUri, setPreviewUri ] = useState<string>();
  const [ tileHovered, setTileHovered ] = useState<boolean>(false);
  const [ gallerPagePath, setGalleryPagePath ] = useState<string>();

  const routeMatch = useRouteMatch();

  useEffect(() => {
    let nextPreviewUri: string, nextGalleryPagePath: string;
    nextPreviewUri = getResizedUri(props.gallery.image.uri, 1920);
    nextGalleryPagePath = `${routeMatch.path}/${props.gallery.route}`;
    setPreviewUri(nextPreviewUri);
    setGalleryPagePath(nextGalleryPagePath);
  }, [ props.gallery ]);

  return (
    <div className="scenic-gallery-tile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scenic-gallery-img">
        {previewUri && (
          <img
            src={previewUri}
            className={tileHovered ? 'hovered' : ''}
          />
        )}
      </div>
      <Link
        className="image-overlay"
        to={gallerPagePath}
      >
        <div className="overlay-text-container">
          { props.gallery.galleryKey }
        </div>
      </Link>
    </div>
  );

  function handleMouseEnter() {
    setTileHovered(true);
  }

  function handleMouseLeave() {
    setTileHovered(false);
  }

}
