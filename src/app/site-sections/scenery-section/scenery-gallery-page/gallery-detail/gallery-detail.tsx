
import './gallery-detail.scss';
import React from 'react';

import { Gallery } from '../../../../models/gallery';
import { OriginalCredits } from './original-credits/original-credits';
import { MediaAndPress } from './media-and-press/media-and-press';

interface GalleryDetailProps {
  gallery: Gallery;
}

export function GalleryDetail(props: GalleryDetailProps) {
  const {
    gallery,
  } = props;

  return (
    <div className="gallery-detail">
      {gallery.hasOriginalCredits() && (
        <OriginalCredits
          gallery={gallery}
        />
      )}
      <div className="extra-credit">
        {gallery.description.map((extraCredit, idx) => {
          return (
            <div
              className="extra-credit-item"
              key={idx}>
              {
                extraCredit
              }
            </div>
          );
        })}
      </div>
      {gallery.hasMedia() && (
        <div className="media-and-press-container">
          <MediaAndPress
            gallery={gallery}
          />
        </div>
      )}
    </div>
  );
}
