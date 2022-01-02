
import './image-gallery.scss';
import React from 'react';
import { getResizedUri } from '../../../../services/gallery-service';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../../constants/constants';

const THUMBNAIL_WIDTH = Math.round(MAX_HORIZONTAL_RES / 5);
const THUMBNAIL_HEIGHT = Math.round(MAX_VERTICAL_RES / 4);
// const THUMBNAIL_HEIGHT = 300;

interface ImageGalleryProps {
  imageUris: string[];
}

export function ImageGallery(props: ImageGalleryProps) {
  const {
    imageUris,
  } = props;
  return (
    <div className="image-gallery">
      {imageUris.map((imageUri, idx) => {
        let resizedUri: string;
        resizedUri = getResizedUri({
          uri: imageUri,
          width: THUMBNAIL_WIDTH,
          height: THUMBNAIL_HEIGHT,
        });
        return (
          <div
            key={idx}
            className="image-preview">
            <img
              src={resizedUri}
            />
          </div>
        );
      })}
    </div>
  );
}
