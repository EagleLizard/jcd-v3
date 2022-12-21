
import './lightbox-gallery.scss';
import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

import { JcdV3Image } from '../../models/jcd-models-v3/jcd-v3-image';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { LightboxModal } from '../lightbox-modal/lightbox-modal';
import { JcdV3Service } from '../../services/jcd-v3-service';
import { getResizedUri } from '../../services/gallery-service';

// const LIGHTBOX_GALLERY_IMAGE_WIDTH = 3840;
const LIGHTBOX_GALLERY_IMAGE_WIDTH = 2048;
const LIGHTBOX_GALLERY_IMAGE_HEIGHT = 2160;

type LighboxGalleryProps = {
  jcdImages: JcdV3Image[];
  selectedImageIdx: number;
  open: boolean;
  onClose: () => void;
}

export function LighboxGallery(props: LighboxGalleryProps) {
  const [ isImageLoaded, setIsImageLoaded ] = useState<boolean>(false);
  const [ selectedImage, setSelectedImage ] = useState<JcdV3Image>();

  useEffect(() => {
    setSelectedImage(props.jcdImages[props.selectedImageIdx]);
  }, [
    props.selectedImageIdx
  ]);

  useEffect(() => {
    if(!props.open) {
      setIsImageLoaded(false);
    }
  }, [
    props.open,
  ]);

  return (
    <LightboxModal
      open={props.open}
      onClose={handleOnClose}
    >
      <div className="lightbox-gallery">
        <div className="lightbox-gallery-image-container">
          {!isImageLoaded && (
            <LoadingSpinner/>
          )}
          <div className="lightbox-gallery-image">
            {(
              (selectedImage !== undefined)
              && (props.open)
            ) && (
              <img
                className={'' + ` ${isImageLoaded ? '' : 'image-loading'}`}
                src={getResizedUri({
                  uri: JcdV3Service.getImageUri(selectedImage.bucketFile),
                  width: LIGHTBOX_GALLERY_IMAGE_WIDTH,
                  height: LIGHTBOX_GALLERY_IMAGE_HEIGHT,
                })}
                onLoad={() => {
                  handleImageOnLoad();
                }}
              />
            )}
          </div>
        </div>
        {(isImageLoaded) && (
          <div className="lightbox-gallery-overlay">
            <div className="overlay-close-control-container">
              <div
                className="overlay-close-control"
                onClick={handleOnClose}
              >
                <CloseIcon
                  className="overlay-control-icon"
                />
              </div>
            </div>
            <div className="overlay-seek-controls-container">
              <div className="overlay-control-seek-left">
                <ChevronLeftIcon
                  className="overlay-control-icon"
                />
              </div>
              <div className="overlay-control-seek-right">
                <ChevronRightIcon
                  className="overlay-control-icon"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </LightboxModal>
  );

  function handleImageOnLoad() {
    setIsImageLoaded(true);
  }

  function handleOnClose() {
    console.log('LightboxGallery handleOnClose()');
    props.onClose();
  }
}
