
import './scenic-project-page.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';


import { JcdV3Project } from '../../../models/jcd-models-v3/jcd-v3-project';
import { JcdV3Image } from '../../../models/jcd-models-v3/jcd-v3-image';
import { JcdV3Service } from '../../../services/jcd-v3-service';
import { getResizedUri } from '../../../services/gallery-service';
import { MAX_HORIZONTAL_RES } from '../../../constants/constants';
import { LighboxGallery } from '../../../common/lightbox-gallery/lightbox-gallery';

const TITLE_IMAGE_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.6);
const TITLE_IMAGE_HEIGHT = Math.round(MAX_HORIZONTAL_RES * 0.8);

const GALLERY_IMAGE_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.4);
const GALLERY_IMAGE_HEIGHT = Math.round(MAX_HORIZONTAL_RES * 0.4);

const GALLERY_IMAGE_ID_SEARCH_PARAM_KEY = 'galleryImg';

type ScenicProjectPageProps = {

};

export function ScenicProjectPage(props: ScenicProjectPageProps) {
  const [ projectRoute, setProjectRoute ] = useState<string>();
  const [ jcdProject, setJcdProject ] = useState<JcdV3Project>();
  const [ jcdProjectImages, setJcdProjectImages ] = useState<JcdV3Image[]>();

  const [ titleImage, setTitleImage ] = useState<JcdV3Image>();
  const [ headingImage, setHeadingImage ] = useState<JcdV3Image>();
  const [ galleryImages, setGalleryImages ] = useState<JcdV3Image[]>();

  const [ gallerySectionStartIdx, setGallerySectionStartIdx ] = useState<number>();
  const [ lightboxOpen, setLightboxOpen ] = useState<boolean>(false);
  const [ lightboxImageIdx, setLightboxImageIdx ] = useState<number>();

  const routeParams = useParams<Record<string, string>>();
  const navigate = useNavigate();
  const [ searchParams, setSearchParams ] = useSearchParams();

  useEffect(() => {
    let imageIdParam: string;
    let foundGalleryIdx: number;
    imageIdParam = searchParams.get(GALLERY_IMAGE_ID_SEARCH_PARAM_KEY);
    if(
      !imageIdParam
      || (galleryImages === undefined)
      || (galleryImages?.length < 1)
    ) {
      setLightboxImageIdx(undefined);
      setLightboxOpen(false);
      return;
    }
    foundGalleryIdx = galleryImages.findIndex(galleryImage => {
      return galleryImage.id === imageIdParam;
    });
    if(foundGalleryIdx === -1) {
      setLightboxImageIdx(undefined);
      setLightboxOpen(false);
      return;
    }
    setLightboxImageIdx(foundGalleryIdx);
    setLightboxOpen(true);
  }, [
    searchParams,
    galleryImages,
  ]);

  useEffect(() => {
    let nextProjectRoute: string;
    nextProjectRoute = routeParams['scenicPage'];
    initProject(nextProjectRoute);
    setProjectRoute(nextProjectRoute);
  }, [
    routeParams
  ]);

  useEffect(() => {
    let foundTitleImageIdx: number, foundTitleImage: JcdV3Image;
    let nextGalleryImages: JcdV3Image[];
    if(
      (jcdProjectImages === undefined)
      || (jcdProjectImages.length < 1)
    ) {
      return;
    }

    nextGalleryImages = jcdProjectImages.slice();
    foundTitleImageIdx = jcdProjectImages.findIndex(jcdProjectImage => {
      return jcdProjectImage.imageType === 'TITLE';
    });

    if(foundTitleImageIdx !== -1) {
      foundTitleImage = jcdProjectImages[foundTitleImageIdx];
      nextGalleryImages.splice(foundTitleImageIdx, 1);
      nextGalleryImages.unshift(foundTitleImage);
    }

    setGalleryImages(nextGalleryImages);
    setTitleImage(nextGalleryImages[0]);
    setHeadingImage(nextGalleryImages[1]);
    setGallerySectionStartIdx(2);
  }, [
    jcdProjectImages,
  ]);

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    });
  }, []);

  return (
    <div className="scenic-project-page">
      {(galleryImages?.length > 0) && (
        <LighboxGallery
          jcdImages={galleryImages}
          selectedImageIdx={lightboxImageIdx}
          open={lightboxOpen}
          onClose={handleLightboxOnClose}
        />
      )}
      <div className="title-section">
        <div className="title-info">
          <div className="project-title">
            {
              jcdProject?.title
            }
          </div>
          <div className="project-playwrights-container">
            {jcdProject?.playwright.map((playwrightItem, idx) => {
              return (
                <div
                  key={idx}
                  className="project-playwright"
                >
                  {
                    playwrightItem
                  }
                </div>
              );
            })}
          </div>
          <div className="project-venue-producer">
            {(
              (jcdProject?.venue !== undefined)
              && (jcdProject?.producer !== undefined)
            ) && (
              `${jcdProject.venue}, ${jcdProject.producer}`
            )}
          </div>
          <div className="project-date">
            {(
              (jcdProject?.month !== undefined)
              && (jcdProject?.year !== undefined)
            ) && (
              JcdV3Service.getDisplayDate(jcdProject.month, jcdProject.year)
            )}
          </div>
          <div className="project-description-container">
            {(jcdProject?.description.map((projectDescription, idx) => {
              return (
                <div
                  key={idx}
                  className="project-description"
                >
                  {
                    projectDescription
                  }
                </div>
              );
            }))}
          </div>
        </div>

        <div className="title-image-section">
          {(titleImage !== undefined) && (
            <div
              className="title-image-container lightbox-image-wrapper"
              onClick={() => {
                handleImageWrapperClick(titleImage);
              }}
            >
              <img
                src={
                  getResizedUri({
                    uri: JcdV3Service.getImageUri(titleImage.bucketFile),
                    width: TITLE_IMAGE_WIDTH,
                    height: TITLE_IMAGE_HEIGHT,
                  })
                }
              />
              {/* {
                titleImage.bucketFile
              } */}
            </div>
          )}
        </div>
      </div>

      <div className="gallery-heading-section">
        <div className="title-image-section">
          {(headingImage !== undefined) && (
            <div
              className="title-image-container lightbox-image-wrapper"
              onClick={() => {
                handleImageWrapperClick(headingImage);
              }}
            >
              <img
                src={
                  getResizedUri({
                    uri: JcdV3Service.getImageUri(headingImage.bucketFile),
                    width: TITLE_IMAGE_WIDTH,
                    height: TITLE_IMAGE_HEIGHT,
                  })
                }
              />
              {
                headingImage.bucketFile
              }
            </div>
          )}
        </div>
        <div className="gallery-heading-info">
          <div className="production-credits-container">
            {jcdProject?.productionCredits.map((productionCredit, idx) => {
              return (
                <div
                  key={idx}
                  className="production-credit"
                >
                  {
                    productionCredit
                  }
                </div>
              );
            })}
          </div>
          {(jcdProject?.mediaAndPress?.length > 0) && (
            <div className="media-and-press-container">
              {jcdProject.mediaAndPress.map((mediaAndPressItem, idx) => {
                return (
                  <div
                    key={idx}
                    className="media-and-press-item"
                  >
                    {(mediaAndPressItem.description?.length > 0) && (
                      <div className="media-and-press-description">
                        {
                          mediaAndPressItem.description
                        }
                      </div>
                    )}
                    <div className="media-and-press-link">
                      <a href={mediaAndPressItem.link.uri}>
                        {mediaAndPressItem.link.label}
                      </a>
                    </div>
                    <div className="media-and-press-publication">
                      {
                        mediaAndPressItem.publication
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="gallery-images-section">
        {(
          galleryImages
          && (galleryImages.length > 0)
        ) && galleryImages.slice(gallerySectionStartIdx).map(galleryImage => {
          return (
            <div
              key={galleryImage.id}
              className="gallery-image-container"
            >
              <div
                className="gallery-image lightbox-image-wrapper"
                onClick={() => {
                  handleImageWrapperClick(galleryImage);
                }}
              >
                <img
                  src={
                    getResizedUri({
                      uri: JcdV3Service.getImageUri(galleryImage.bucketFile),
                      width: GALLERY_IMAGE_WIDTH,
                      height: GALLERY_IMAGE_HEIGHT,
                    })
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );

  async function initProject(projectRoute: string) {
    let nextJcdV3Project: JcdV3Project, nextJcdV3ProjectImages: JcdV3Image[];
    nextJcdV3Project = await JcdV3Service.getProjectByRoute(projectRoute);
    nextJcdV3ProjectImages = await JcdV3Service.getProjectImages(nextJcdV3Project.projectKey);
    setJcdProject(nextJcdV3Project);
    setJcdProjectImages(nextJcdV3ProjectImages);
  }

  function handleImageWrapperClick(jcdProjectImage: JcdV3Image) {
    let nextSearchParams: URLSearchParams;
    let replaceHistory: boolean;
    let foundGalleryIdx: number;
    foundGalleryIdx = galleryImages.findIndex(galleryImage => {
      return galleryImage.id === jcdProjectImage.id;
    });
    if(foundGalleryIdx === -1) {
      return;
    }
    nextSearchParams = new URLSearchParams({
      [GALLERY_IMAGE_ID_SEARCH_PARAM_KEY]: galleryImages[foundGalleryIdx].id,
    });
    replaceHistory = !!searchParams.get(GALLERY_IMAGE_ID_SEARCH_PARAM_KEY);
    setSearchParams(nextSearchParams, {
      replace: replaceHistory,
    });
  }

  function handleLightboxOnClose() {
    setLightboxImageIdx(undefined);
    setLightboxOpen(false);
    navigate(-1);
  }
}
