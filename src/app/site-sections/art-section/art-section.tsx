
import './art-section.scss';
import React, { useEffect, useState } from 'react';
import { JcdV3Image } from '../../models/jcd-models-v3/jcd-v3-image';
import { JcdV3Service } from '../../services/jcd-v3-service';
import { GALLERY_IMAGE_ID_SEARCH_PARAM_KEY, JCD_V3_ART_PROJECT_KEY, MAX_HORIZONTAL_RES, MAX_VERTICAL_RES } from '../../constants/constants';
import { getResizedUri } from '../../services/gallery-service';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { LighboxGallery } from '../../common/lightbox-gallery/lightbox-gallery';

export const ART_SECTION_ROUTE = 'art';

const ART_IMAGE_WIDTH = Math.round(MAX_HORIZONTAL_RES * 0.25);
const ART_IMAGE_HEIGHT = Math.round(MAX_VERTICAL_RES * 0.25);

type ArtSectionProps = {

};

export function ArtSection(props: ArtSectionProps) {
  const [ galleryImages, setGalleryImages ] = useState<JcdV3Image[]>();

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
    initArtPage().catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className="art-section">
      {(galleryImages?.length > 0) && (
        <LighboxGallery
          jcdImages={galleryImages}
          selectedImageIdx={lightboxImageIdx}
          open={lightboxOpen}
          onClose={handleLightboxOnClose}
          onSeekNext={handleLightboxSeekNext}
          onSeekBack={handleLightboxSeekBack}
        />
      )}
      <div className="art-section-heading">
        <div className="header-text">
          A BIT OF EVERYTHING ALL IN ONE PLACE
        </div>
        <div className="content-text">
          A curation of scenic painting, murals, graphics and paint elevations developed for productions, visual art, marketing and show logos, digital artwork as a cure for Sunday Scaries, et cetera.
        </div>
      </div>
      <div className="art-gallery-section">
        {galleryImages?.map(galleryImage => {
          return (
            <div
              key={galleryImage.id}
              className="gallery-image-container"
            >
              <div
                className="gallery-image lightbox-image-wrapper"
                onClick={() => {
                  handleImageSelect(galleryImage);
                }}
              >
                <img
                  src={
                    getResizedUri({
                      uri: JcdV3Service.getImageUri(galleryImage.bucketFile),
                      width: ART_IMAGE_WIDTH,
                      height: ART_IMAGE_HEIGHT,
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

  async function initArtPage() {
    let nextJcdArtImages: JcdV3Image[];
    nextJcdArtImages = await JcdV3Service.getProjectImages(JCD_V3_ART_PROJECT_KEY);
    setGalleryImages(nextJcdArtImages);
  }

  function handleImageSelect(jcdProjectImage: JcdV3Image) {
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

  function handleLightboxSeekNext() {
    let currJcdProjectImage: JcdV3Image, nextProjectImage: JcdV3Image;
    let nextIdx: number;
    let foundGalleryIdx: number;
    currJcdProjectImage = galleryImages[lightboxImageIdx];
    foundGalleryIdx = galleryImages.findIndex(galleryImage => {
      return galleryImage.id === currJcdProjectImage.id;
    });
    if(foundGalleryIdx === -1) {
      return;
    }
    console.log('onSeekNext');
    nextIdx = (foundGalleryIdx >= (galleryImages.length - 1))
      ? 0
      : foundGalleryIdx + 1
    ;
    nextProjectImage = galleryImages[nextIdx];
    handleImageSelect(nextProjectImage);
  }

  function handleLightboxSeekBack() {
    let currJcdProjectImage: JcdV3Image, nextProjectImage: JcdV3Image;
    let prevIdx: number;
    let foundGalleryIdx: number;
    currJcdProjectImage = galleryImages[lightboxImageIdx];
    foundGalleryIdx = galleryImages.findIndex(galleryImage => {
      return galleryImage.id === currJcdProjectImage.id;
    });
    if(foundGalleryIdx === -1) {
      return;
    }
    console.log('onSeekBack');
    prevIdx = (foundGalleryIdx <= 0)
      ? galleryImages.length - 1
      : foundGalleryIdx - 1
    ;
    nextProjectImage = galleryImages[prevIdx];
    handleImageSelect(nextProjectImage);
  }

}
