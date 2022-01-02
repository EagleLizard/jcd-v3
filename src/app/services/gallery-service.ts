
import queryString, { ParsedQuery, ParsedUrl } from 'query-string';

import { JCD_PROJECT_ENUM } from '../constants/gallery-constants';
import { SCENIC_GALLERY_PAGES } from '../constants/gallery-defs';
import { SCENIC_GALLERY_IMAGES } from '../constants/scenic-galleries';
import { Gallery } from '../models/gallery';
import { GalleryImage } from '../models/gallery-image';

export interface ResizeUriOpts {
  uri: string;
  width?: number;
  height?: number;
}

export function getScenicGalleryImage(galleryKey: JCD_PROJECT_ENUM): GalleryImage {
  let foundGallery: GalleryImage;
  foundGallery = SCENIC_GALLERY_IMAGES.find(sceniceGallery => {
    return sceniceGallery.galleryKey === galleryKey;
  });
  if(foundGallery === undefined) {
    throw new Error(`Scenic GalleryImage not found for key: ${galleryKey}`);
  }
  return foundGallery;
}

export function getResizedUri(opts: ResizeUriOpts) {
  let parsedUri: ParsedUrl, parsedQuery: ParsedQuery;
  let resizedUri: string;
  const {
    uri,
    width,
    height,
  } = opts;
  parsedUri = queryString.parseUrl(uri);
  parsedQuery = parsedUri.query;
  if(opts.width !== undefined) {
    parsedQuery.width = width + '';
  }
  if(opts.height !== undefined) {
    parsedQuery.height = height + '';
  }
  resizedUri = queryString.stringifyUrl({
    url: parsedUri.url,
    query: parsedQuery
  });
  return resizedUri;
}

export function getScenicGallery(galleryKey: JCD_PROJECT_ENUM): Gallery {
  let foundGallery: Gallery;
  foundGallery = SCENIC_GALLERY_PAGES.find(scenicGalleryPage => {
    return scenicGalleryPage.galleryKey === galleryKey;
  });
  if(foundGallery === undefined) {
    throw new Error(`Scenic Gallery not found for key: ${galleryKey}`);
  }
  foundGallery.setImage(getScenicGalleryImage(galleryKey));
  return foundGallery;
}

export function getScenicGalleryByRoute(route: string): Gallery {
  let foundGallery: Gallery;
  foundGallery = SCENIC_GALLERY_PAGES.find(scenicGalleryPage => {
    return scenicGalleryPage.route === route;
  });
  if(foundGallery === undefined) {
    throw new Error(`Scenic Gallery not found for route: ${route}`);
  }
  return foundGallery;
}
