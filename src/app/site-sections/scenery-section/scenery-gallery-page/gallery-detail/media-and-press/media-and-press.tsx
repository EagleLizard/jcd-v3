import './media-and-press.scss';
import React from 'react';

import { Gallery } from '../../../../../models/gallery';
import { MediaItem } from './media-item/media-item';

interface MediaAndPressProps {
  gallery: Gallery;
}

export function MediaAndPress(props: MediaAndPressProps) {
  const {
    gallery,
  } = props;

  return (
    <div className="media-and-press">
      <div className="media-and-press-heading">
        Media & Press
      </div>
      {gallery.mediaAndPress.map((mediaItem, idx) => {
        return (
          <div
            className="media-item-container"
            key={idx}>
            <MediaItem
              mediaItem={mediaItem}
            />
          </div>
        );
      })}
    </div>
  );
}
