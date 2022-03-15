
import './scenery-gallery-page.scss';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getResizedUri } from '../../../services/gallery-service';
import { GalleryDetail } from './gallery-detail/gallery-detail';
import { ImageGallery } from './image-gallery/image-gallery';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../constants/constants';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject, JcdProjectPage } from '../../../models/jcd-entities';

const GALLERY_INLINE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.69);
const GALLERY_INLINE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES * 0.6);

interface SceneryGalleryPageProps {

}

export function SceneryGalleryPage(props: SceneryGalleryPageProps) {
  const [ galleryHeaderUri, setGalleryHeaderUri ] = useState<string>();
  const [ galleryUris, setGalleryUris ] = useState<string[]>();
  const [ galleryDetailImageUriResized, setGalleryDetailImageUriResized ] = useState<string>();

  const [ projectRoute, setProjectRoute ] = useState<string>();
  const [ scenicProject, setScenicProject ] = useState<JcdProject>();
  const [ scenicProjectPage, setScenicProjectPage ] = useState<JcdProjectPage>();

  const routeParams = useParams<Record<string, string>>();

  useEffect(() => {
    let nextProjectRoute: string;
    nextProjectRoute = routeParams['scenicPage'];
    setProjectRoute(nextProjectRoute);
  }, [ routeParams ]);

  useEffect(() => {
    if(projectRoute === undefined) {
      return;
    }
    getProjectInfo(projectRoute)
      .catch(err => {
        console.error(err);
      });
  }, [
    projectRoute,
  ]);

  useEffect(() => {
    let headerImageUri: string, detailImageUri: string;
    let nextGalleryHeaderUri: string, nextGalleryDetailImageUri: string,
      nextGalleryUris: string[]
    ;
    if(scenicProjectPage === undefined) {
      return;
    }
    headerImageUri = JcdService.getImageUri(scenicProject.coverImageUri);
    detailImageUri = JcdService.getImageUri(scenicProjectPage.galleryImageUris[0]);
    nextGalleryHeaderUri = getResizedUri({
      uri: headerImageUri,
      width: GALLERY_INLINE_IMG_WIDTH,
      height: GALLERY_INLINE_IMG_HEIGHT,
    });
    nextGalleryDetailImageUri = getResizedUri({
      uri: detailImageUri,
      width: GALLERY_INLINE_IMG_WIDTH,
      height: GALLERY_INLINE_IMG_HEIGHT,
    });
    nextGalleryUris = scenicProjectPage.galleryImageUris
      .map(JcdService.getImageUri)
    ;
    setGalleryHeaderUri(nextGalleryHeaderUri);
    setGalleryDetailImageUriResized(nextGalleryDetailImageUri);
    setGalleryUris(nextGalleryUris);
  }, [
    scenicProjectPage,
  ]);

  async function getProjectInfo(projectRoute: string) {
    let nextScenicProject: JcdProject, nextScenicProjectPage: JcdProjectPage;
    nextScenicProject = await JcdService.getProject(projectRoute);
    nextScenicProjectPage = await JcdService.getProjectPage(nextScenicProject.projectKey);
    setScenicProject(nextScenicProject);
    setScenicProjectPage(nextScenicProjectPage);
  }

  return (
    <div className="scenery-gallery-page">

      <div className="gallery-header-content">
        <div className="gallery-header-project-info">
          <div className="gallery-title-container">
            <div className="gallery-title">
              {
                scenicProject?.title
              }
            </div>
          </div>
          <div className="detail-footer">
            <div className="footer-year">
              {
                scenicProjectPage?.projectDetails
                  ? JcdService.getDisplayDate(scenicProjectPage.projectDetails)
                  : undefined
              }
            </div>
          </div>
          <div className="organization">
            <div className="organization-title">
              { scenicProjectPage?.projectDetails?.org }
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
          {(scenicProjectPage?.projectDetails) && (
            <GalleryDetail
              projectDetails={scenicProjectPage.projectDetails}
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
