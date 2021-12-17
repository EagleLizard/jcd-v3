
import queryString, { ParsedQuery, ParsedUrl } from 'query-string';

import { JCD_PROJECT_ENUM } from '../constants/gallery-constants';
import { SCENIC_GALLERY_IMAGES } from '../constants/scenic-galleries';
import { GalleryImage } from '../models/gallery-image';

export function getScenicGallery(galleryKey: JCD_PROJECT_ENUM): GalleryImage {
  let foundGallery: GalleryImage;
  foundGallery = SCENIC_GALLERY_IMAGES.find(sceniceGallery => {
    return sceniceGallery.galleryKey === galleryKey;
  });
  if(foundGallery === undefined) {
    throw new Error(`Scenic Gallery not found for key: ${galleryKey}`)
  }
  return foundGallery;
}

export function getResizedUri(uri: string, width: number) {
  let parsedUri: ParsedUrl, parsedQuery: ParsedQuery;
  let resizedUri: string;
  parsedUri = queryString.parseUrl(uri);
  parsedQuery = parsedUri.query;
  parsedQuery.width = width + '';
  resizedUri = queryString.stringifyUrl({
    url: parsedUri.url,
    query: parsedQuery
  });
  return resizedUri;
}
