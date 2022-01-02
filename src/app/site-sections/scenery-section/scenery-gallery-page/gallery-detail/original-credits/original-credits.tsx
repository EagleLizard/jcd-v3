import './original-credits.scss';
import React from 'react';

import { Gallery } from '../../../../../models/gallery';

interface OriginalCreditsProps {
  gallery: Gallery
}

export function OriginalCredits(props: OriginalCreditsProps) {
  return (
    <div className="original-credits">
      {props.gallery.originalCredits.map(((originalCredit, idx) => {
        return (
          <div
            className="original-credit"
            key={idx}>
            {
              originalCredit
            }
          </div>
        );
      }))}
    </div>
  );
}
