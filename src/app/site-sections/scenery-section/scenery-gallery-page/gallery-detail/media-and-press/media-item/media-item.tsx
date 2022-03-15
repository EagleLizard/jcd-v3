
import './media-item.scss';
import React from 'react';

import { JcdMediaAndPressDetail } from '../../../../../../models/jcd-entities';

interface MediaItemProps {
  mediaItem: JcdMediaAndPressDetail;
}

export function MediaItem(props: MediaItemProps) {
  const {
    mediaItem,
  } = props;

  return (
    <div className="media-item">
      {mediaItem.description && (
        <div className="media-item-description">
          {
            mediaItem.description
          }
        </div>
      )}
      {(mediaItem.description && mediaItem.link) && (
        <span>
          &nbsp;
        </span>
      )}
      <div className="media-source">
        {mediaItem.link && (
          <div className="media-item-link">
            <a
              href={mediaItem.link.uri}
              rel="noreferrer"
              target="_blank">
              {
                mediaItem.link.label
              }
            </a>
          </div>
        )}
        &nbsp;
        <div className="media-item-publication">
          {
            mediaItem.publication
          }
        </div>
      </div>
    </div>
  );
}
