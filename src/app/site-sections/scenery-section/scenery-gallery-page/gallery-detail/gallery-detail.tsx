
import './gallery-detail.scss';
import React from 'react';

import { OriginalCredits } from './original-credits/original-credits';
import { MediaAndPress } from './media-and-press/media-and-press';
import { JcdProjectDetails } from '../../../../models/jcd-entities';

interface GalleryDetailProps {
  projectDetails: JcdProjectDetails;
}

export function GalleryDetail(props: GalleryDetailProps) {
  const {
    projectDetails,
  } = props;

  const hasOriginalCredits = projectDetails.originalCredits.length > 0;
  const hasMedia = projectDetails.mediaAndPress.length > 0;

  return (
    <div className="gallery-detail">
      {hasOriginalCredits && (
        <div className="original-credits-container">
          <OriginalCredits
            originalCredits={props.projectDetails.originalCredits}
          />
        </div>
      )}
      <div className="extra-credit">
        {projectDetails.credits.map((extraCredit, idx) => {
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
      {hasMedia && (
        <div className="media-and-press-container">
          <MediaAndPress
            mediaAndPress={projectDetails.mediaAndPress}
          />
        </div>
      )}
    </div>
  );
}
