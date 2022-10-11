
import './image-gallery.scss';
import React from 'react';

import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../../constants/constants';
import { GalleryPreview } from './gallery-preview/gallery-preview';

// const THUMBNAIL_WIDTH = Math.round(MAX_HORIZONTAL_RES / 5);
const THUMBNAIL_WIDTH = 400;
// const THUMBNAIL_WIDTH = Math.round(MAX_HORIZONTAL_RES / 4);
const THUMBNAIL_HEIGHT = Math.round(MAX_VERTICAL_RES / 2);
// const THUMBNAIL_HEIGHT = 300;

interface ImageGalleryProps {
  imageUris: string[];
  thumbWidth?: number;
  thumbHeight?: number;
}

export function ImageGallery(props: ImageGalleryProps) {
  const {
    imageUris,
  } = props;

  const thumbWidth = props.thumbWidth ?? THUMBNAIL_WIDTH;
  const thumbHeight = props.thumbHeight ?? THUMBNAIL_HEIGHT;

  return (
    <div className="image-gallery">
      {imageUris.map((imageUri, idx) => {
        return (
          <GalleryPreview
            onClick={onGalleryPreviewSelect}
            key={idx}
            galleryIdx={idx}
            uri={imageUri}
            width={thumbWidth}
            height={thumbHeight}
          />
        );
      })}
    </div>
  );

  function onGalleryPreviewSelect(galleryItemIdx: number) {
    console.log(`galleryItemIdx: ${galleryItemIdx}`);
  }
}
