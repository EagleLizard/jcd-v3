
import './scenery-gallery-page.scss';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getResizedUri, getScenicGalleryByRoute, getScenicGalleryImage } from '../../../services/gallery-service';
import { GalleryDetail } from './gallery-detail/gallery-detail';
import { ImageGallery } from './image-gallery/image-gallery';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../constants/constants';
import { Gallery } from '../../../models/gallery';
import { GalleryImage } from '../../../models/gallery-image';

const GALLERY_INLINE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.69);
const GALLERY_INLINE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES * 0.6);

interface SceneryGalleryPageProps {

}

export function SceneryGalleryPage(props: SceneryGalleryPageProps) {
  const [ galleryHeaderUri, setGalleryHeaderUri ] = useState<string>();
  const [ gallery, setGallery ] = useState<Gallery>();
  const [ galleryUris, setGalleryUris ] = useState<string[]>();
  const [ galleryDetailImageUriResized, setGalleryDetailImageUriResized ] = useState<string>();

  const routeParams = useParams<Record<string, string>>();

  useEffect(() => {
    let scenicPageKey: string;
    let nextGallery: Gallery;
    scenicPageKey = routeParams['scenicPage'];
    nextGallery = getScenicGalleryByRoute(scenicPageKey);
    setGallery(nextGallery);
  }, [ routeParams ]);

  useEffect(() => {
    let galleryImage: GalleryImage, _galleryDetailImageUri: string;
    let nextGalleryHeaderUri: string, nextGalleryUris: string[],
      nextGalleryDetailImageUriResized: string;
    if(gallery === undefined) {
      return;
    }
    galleryImage = getScenicGalleryImage(gallery.galleryKey);
    nextGalleryHeaderUri = getResizedUri({
      uri: galleryImage.uri,
      width: GALLERY_INLINE_IMG_WIDTH,
      height: GALLERY_INLINE_IMG_HEIGHT,
    });
    nextGalleryUris = gallery.galleryUris.slice();
    _galleryDetailImageUri = nextGalleryUris.shift();
    nextGalleryDetailImageUriResized = getResizedUri({
      uri: _galleryDetailImageUri,
      width: GALLERY_INLINE_IMG_WIDTH,
      height: GALLERY_INLINE_IMG_HEIGHT,
    });
    setGalleryHeaderUri(nextGalleryHeaderUri);
    setGalleryHeaderUri(nextGalleryHeaderUri);
    setGalleryUris(nextGalleryUris);
    setGalleryDetailImageUriResized(nextGalleryDetailImageUriResized);
  }, [ gallery ]);

  return (
    <div className="scenery-gallery-page">

      <div className="gallery-header-content">
        <div className="gallery-header-project-info">
          <div className="gallery-title-container">
            <div className="gallery-title">
              {
                gallery?.title
              }
            </div>
          </div>
          <div className="detail-footer">
            <div className="footer-year">
              {
                gallery?.year
              }
            </div>
          </div>
          <div className="organization">
            <div className="organization-title">
              { gallery?.organization }
            </div>
          </div>
        </div>
        <div className="gallery-content-image-wrapper">
          <div className="gallery-image-container">
            {galleryHeaderUri && (
              <img
                src={galleryHeaderUri}
              />
            )}
          </div>
        </div>
      </div>

      <div className="gallery-detail-container">
        <div className="gallery-content-image-wrapper">
          <div className="gallery-image-container">
            {galleryDetailImageUriResized && (
              <img
                src={galleryDetailImageUriResized}
              />
            )}
          </div>
        </div>

        <div className="gallery-detail-content">
          {gallery && (
            <GalleryDetail
              gallery={gallery}
            />
          )}
        </div>
      </div>

      <div className="gallery-preview-images">
        {galleryUris && (
          <ImageGallery
            imageUris={galleryUris}
          />
        )}
      </div>

    </div>
  );
}
