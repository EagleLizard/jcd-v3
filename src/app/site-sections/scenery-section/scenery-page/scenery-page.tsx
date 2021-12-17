
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { getScenicGallery } from '../../../services/gallery-service';
import { GalleryImage } from '../../../models/gallery-image';
import { SCENIC_PROJECTS } from '../../../constants/gallery-constants';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';

export const SCENERY_SECTION_ROUTE = 'scenery';

interface SceneryPageProps {

}

export function SceneryPage(props: SceneryPageProps) {
  const [ galleryImages, setGalleryImages ] = useState<GalleryImage[]>([]);

  useEffect(() => {
    let nextGalleryImages: GalleryImage[];
    nextGalleryImages = SCENIC_PROJECTS.map(galleryKey => {
      return getScenicGallery(galleryKey);
    });
    console.log('nextGalleryImages');
    console.log(nextGalleryImages);
    setGalleryImages(nextGalleryImages);
  }, []);

  return (
    <div className="scenery-page">
      Scenery Page
      <div className="scenic-galleries">
        <div className="grid-container">
          {galleryImages.map(galleryImage => {
            return (
              <div
                className="scenic-gallery-tile-container grid-item"
                key={galleryImage.galleryKey}>
                <ScenicGalleryTile
                  galleryImage={galleryImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

