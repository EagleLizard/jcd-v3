
import './scenic-gallery-tile.scss';
import React, { useEffect, useState } from 'react';

import { getResizedUri } from '../../../../services/gallery-service';
import { Gallery } from '../../../../models/gallery';
import { Link } from 'react-router-dom';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../../constants/constants';

const GALLERY_TILE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES);
const GALLERY_TILE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES);

interface ScenicGalleryTileProps {
  gallery: Gallery;
}

export function ScenicGalleryTile(props: ScenicGalleryTileProps) {
  const [ previewUri, setPreviewUri ] = useState<string>();
  const [ tileHovered, setTileHovered ] = useState<boolean>(false);

  const galleryPagePath = `${props.gallery.route}`;

  useEffect(() => {
    let nextPreviewUri: string;
    nextPreviewUri = getResizedUri({
      uri: props.gallery.image.uri,
      width: GALLERY_TILE_IMG_WIDTH,
      height: GALLERY_TILE_IMG_HEIGHT,
    });
    setPreviewUri(nextPreviewUri);
  }, [ props.gallery ]);

  return (
    <div className="scenic-gallery-tile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="image-preview">
        {previewUri && (
          <img
            src={previewUri}
            className={tileHovered ? 'hovered' : ''}
          />
        )}
      </div>
      <Link
        className="image-overlay"
        to={galleryPagePath}
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
