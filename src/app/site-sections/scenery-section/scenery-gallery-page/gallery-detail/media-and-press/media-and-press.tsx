import './media-and-press.scss';
import React from 'react';

import { MediaItem } from './media-item/media-item';
import { JcdMediaAndPressDetail } from '../../../../../models/jcd-entities';

interface MediaAndPressProps {
  mediaAndPress: JcdMediaAndPressDetail[];
}

export function MediaAndPress(props: MediaAndPressProps) {
  const {
    mediaAndPress,
  } = props;

  return (
    <div className="media-and-press">
      <div className="media-and-press-heading">
        Media & Press
      </div>
      {mediaAndPress.map((mediaItem, idx) => {
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
