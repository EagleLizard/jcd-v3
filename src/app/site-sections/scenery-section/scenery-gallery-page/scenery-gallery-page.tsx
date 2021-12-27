
import './scenery-gallery-page.scss';
import React, { useEffect, useState } from 'react';

import { useParams, useRouteMatch } from 'react-router-dom';
import { Gallery } from '../../../models/gallery';
import { getScenicGalleryByRoute } from '../../../services/gallery-service';

interface SceneryGalleryPageProps {

}

export function SceneryGalleryPage(props: SceneryGalleryPageProps) {
  const routeParams = useParams<Record<string, string>>();

  const scenicGallery = getScenicGalleryByRoute(routeParams['scenicPage']);

  return (
    <div className="scenery-gallery-page">
      <div className="gallery-detail">
        <div className="gallery-title">
          {
            scenicGallery.title
          }
        </div>
        <OriginalCredits
          gallery={scenicGallery}
        />
        <div className="self-credit">
          {
            scenicGallery.credit
          }
        </div>
        <div className="extra-credit">
          {scenicGallery.description.map((extraCredit, idx) => {
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
      </div>
    </div>
  );
}

interface OriginalCreditsProps {
  gallery: Gallery;
}

function OriginalCredits(props: OriginalCreditsProps) {
  return props.gallery.hasOriginalCredits()
    ? (
      <div className="original-credits">
        {props.gallery.originalCredits.map((originalCredit, idx) => {
          return (
            <OriginalCredit
              text={originalCredit}
              key={idx}
            />
          );
        })}
      </div>
    )
    : null
  ;
}

interface OriginalCreditProps {
  text: string;
}

function OriginalCredit(props: OriginalCreditProps) {
  return (
    <div className="original-credit">
      {props.text}
    </div>
  );
}
