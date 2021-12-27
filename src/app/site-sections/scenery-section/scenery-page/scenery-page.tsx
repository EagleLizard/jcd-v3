
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { getScenicGallery, getScenicGalleryImage } from '../../../services/gallery-service';
import { GalleryImage } from '../../../models/gallery-image';
import { SCENIC_PROJECTS } from '../../../constants/gallery-constants';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';
import { Gallery } from '../../../models/gallery';

export const SCENERY_SECTION_ROUTE = 'scenery';

interface SceneryPageProps {

}

export function SceneryPage(props: SceneryPageProps) {
  const [ scenicGalleries, setScenicGalleries ] = useState<Gallery[]>([]);

  useEffect(() => {
    let nextScenicGalleries: Gallery[];
    nextScenicGalleries = SCENIC_PROJECTS.map(galleryKey => {
      return getScenicGallery(galleryKey);
    });
    console.log('nextGalleryImages');
    console.log(nextScenicGalleries);
    setScenicGalleries(nextScenicGalleries);
  }, []);

  return (
    <div className="scenery-page">
      Scenery Page
      <div className="scenic-galleries">
        <div className="grid-container">
          {scenicGalleries.map(scenicGallery => {
            return (
              <div
                className="scenic-gallery-tile-container grid-item"
                key={scenicGallery.galleryKey}>
                <ScenicGalleryTile
                  gallery={scenicGallery}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

