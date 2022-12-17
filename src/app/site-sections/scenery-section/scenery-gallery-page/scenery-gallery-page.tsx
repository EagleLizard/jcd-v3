
import './scenery-gallery-page.scss';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getResizedUri } from '../../../services/gallery-service';
import { GalleryDetail } from './gallery-detail/gallery-detail';
import { ImageGallery } from './image-gallery/image-gallery';
import { MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../../constants/constants';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject, JcdProjectPage } from '../../../models/jcd-entities';
import { JcdV3Project } from '../../../models/jcd-models-v3/jcd-v3-project';
import { JcdV3Service } from '../../../services/jcd-v3-service';
import { JcdV3Image } from '../../../models/jcd-models-v3/jcd-v3-image';

const GALLERY_INLINE_IMG_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.69);
const GALLERY_INLINE_IMG_HEIGHT = Math.round(MAX_VERTICAL_RES * 0.6);

interface SceneryGalleryPageProps {

}

export function SceneryGalleryPage(props: SceneryGalleryPageProps) {
  const [ galleryHeaderUri, setGalleryHeaderUri ] = useState<string>();
  const [ galleryUris, setGalleryUris ] = useState<string[]>();
  const [ galleryDetailImageUriResized, setGalleryDetailImageUriResized ] = useState<string>();

  const [ projectRoute, setProjectRoute ] = useState<string>();
  const [ _scenicProject, _setScenicProject ] = useState<JcdProject>();
  const [ _scenicProjectPage, _setScenicProjectPage ] = useState<JcdProjectPage>();

  const [ scenicProject, setScenicProject ] = useState<JcdV3Project>();
  const [ scenicImages, setScenicImages ] = useState<JcdV3Image[]>();

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
    initProject(projectRoute)
      .catch(err => {
        console.error(err);
      });
  }, [
    projectRoute,
  ]);

  useEffect(() => {
    let foundTitleImageIdx: number;
    let galleryImages: JcdV3Image[], titleImage: JcdV3Image;
    let headerImageUri: string, detailImageUri: string;
    let nextGalleryHeaderUri: string,
      nextGalleryDetailImageUri: string,
      nextGalleryUris: string[]
    ;
    if(
      (scenicImages === undefined)
      || (scenicImages.length < 1)
    ) {
      return;
    }
    galleryImages = scenicImages.slice();
    foundTitleImageIdx = galleryImages.findIndex(jcdImage => {
      return jcdImage.imageType === 'TITLE';
    });
    if(foundTitleImageIdx === -1) {
      console.error(galleryImages);
      throw new Error('Failed to get title image');
    }
    titleImage = galleryImages[foundTitleImageIdx];
    galleryImages.splice(foundTitleImageIdx, 1);

    headerImageUri = JcdV3Service.getImageUri(titleImage.bucketFile);
    detailImageUri = JcdV3Service.getImageUri(galleryImages[0].bucketFile);
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
    nextGalleryUris = galleryImages.map(jcdImage => {
      return JcdV3Service.getImageUri(jcdImage.bucketFile);
    });

    setGalleryHeaderUri(nextGalleryHeaderUri);
    setGalleryDetailImageUriResized(nextGalleryDetailImageUri);
    setGalleryUris(nextGalleryUris);
  }, [
    scenicImages,
  ]);

  useEffect(() => {
    if(scenicProject === undefined) {
      return;
    }
    initImages(scenicProject.projectKey)
      .catch(err => {
        console.error(err);
      });
  }, [
    scenicProject,
  ]);

  async function initProject(projectRoute: string) {
    let jcdProject: JcdV3Project, jcdProjectImages: JcdV3Image[];
    jcdProject = await JcdV3Service.getProjectByRoute(projectRoute);
    setScenicProject(jcdProject);
    console.log('jcdProjectImages');
    console.log(jcdProjectImages);
  }

  async function initImages(projectKey: string) {
    let jcdProjectImages: JcdV3Image[];
    jcdProjectImages = await JcdV3Service.getProjectImages(projectKey);
    setScenicImages(jcdProjectImages);
  }

  return (
    <div className="scenery-gallery-page">

      <div className="gallery-header-content">
        <div className="gallery-header-project-info">
          <div className="gallery-title-container">
            <div className="gallery-title">
              {
                _scenicProject?.title
              }
            </div>
          </div>
          <div className="detail-footer">
            <div className="footer-year">
              {
                _scenicProjectPage?.projectDetails
                  ? JcdService.getDisplayDate(_scenicProjectPage.projectDetails)
                  : undefined
              }
            </div>
          </div>
          <div className="organization">
            <div className="organization-title">
              { _scenicProjectPage?.projectDetails?.org }
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
          {(_scenicProjectPage?.projectDetails) && (
            <GalleryDetail
              projectDetails={_scenicProjectPage.projectDetails}
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
