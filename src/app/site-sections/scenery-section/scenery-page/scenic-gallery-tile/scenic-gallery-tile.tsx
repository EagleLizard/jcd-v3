
import './scenic-gallery-tile.scss';
import React, { useEffect, useState } from 'react';

import { getResizedUri } from '../../../../services/gallery-service';
import { Link } from 'react-router-dom';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../../constants/constants';
import { JcdV3ProjectPreview } from '../../../../models/jcd-models-v3/jcd-v3-project-preview';
import { JcdV3Service } from '../../../../services/jcd-v3-service';

const GALLERY_TILE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES);
const GALLERY_TILE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES);

// const GALLERY_TILE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES / 2);
// const GALLERY_TILE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES / 2);

interface ScenicGalleryTileProps {
  jcdProject: JcdV3ProjectPreview;
}

export function ScenicGalleryTile(props: ScenicGalleryTileProps) {
  const [ previewUri, setPreviewUri ] = useState<string>();
  const [ tileHovered, setTileHovered ] = useState<boolean>(false);

  const galleryPagePath = `${props.jcdProject.route}`;

  useEffect(() => {
    let nextPreviewUri: string, coverImageUri: string;
    coverImageUri = JcdV3Service.getImageUri(props.jcdProject.titleUri);
    nextPreviewUri = getResizedUri({
      uri: coverImageUri,
      width: GALLERY_TILE_IMG_WIDTH,
      height: GALLERY_TILE_IMG_HEIGHT,
    });
    setPreviewUri(nextPreviewUri);
  }, [ props.jcdProject ]);

  return (
    <div className="scenic-gallery-tile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
          { props.jcdProject.title }
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
