
import './gallery-preview.scss';
import React from 'react';
import { getResizedUri } from '../../../../../services/gallery-service';

type GalleryPreviewProps = {
  galleryIdx: number;
  uri: string;
  width: number;
  height: number;
  onClick: (selectedIdx: number) => void;
};

export function GalleryPreview(props: GalleryPreviewProps) {
  let resizedUri: string;
  resizedUri = getResizedUri({
    uri: props.uri,
    width: props.width,
    height: props.height,
  });

  return (
    <div
      className="gallery-preview"
      onClick={() => handleClick(props.galleryIdx)}>
      <img
        src={resizedUri}
      />
    </div>
  );

  function handleClick(selectedGalleryItemIdx: number) {
    props.onClick(selectedGalleryItemIdx);
  }
}
