
import './scenic-gallery-tile.scss';
import React, { useEffect, useState } from 'react';

import { GalleryImage } from '../../../../models/gallery-image';
import { getResizedUri } from '../../../../services/gallery-service';

interface ScenicGalleryTileProps {
  galleryImage: GalleryImage;
}

export function ScenicGalleryTile(props: ScenicGalleryTileProps) {
  const [ previewUri, setPreviewUri ] = useState<string>();
  const [ tileHovered, setTileHovered ] = useState<boolean>(false);

  useEffect(() => {
    let nextPreviewUri: string;
    nextPreviewUri = getResizedUri(props.galleryImage.uri, 1920);
    setPreviewUri(nextPreviewUri);
  }, [ props.galleryImage ]);

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
      <a  className="image-overlay">
        <div className="overlay-text-container">
          { props.galleryImage.galleryKey }
        </div>
      </a>
    </div>
  );

  function handleMouseEnter() {
    setTileHovered(true);
  }

  function handleMouseLeave() {
    setTileHovered(false);
  }

}
