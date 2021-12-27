
import { JCD_PROJECT_ENUM } from '../constants/gallery-constants';
import { getResizedUri } from '../services/gallery-service';
import { GalleryImage } from './gallery-image';

export interface MediaAndPressDetail {
  description?: string;
  link?: {
    label: string;
    uri: string;
  };
  publication: string;
}

export class Gallery {
  galleryKey: JCD_PROJECT_ENUM;
  galleryUris: string[];
  title: string;
  image: GalleryImage;
  route: string;
  organization: string;
  credit: string;
  description: string[];
  year: string;
  mediaAndPress: MediaAndPressDetail[];
  originalCredits: string[];

  constructor(
    galleryKey: JCD_PROJECT_ENUM,
    galleryUris: string[],
    title: string,
    route: string,
    organization: string,
    credit: string,
    description: string[],
    year: string,
    mediaAndPress?: MediaAndPressDetail[],
    originalCredits?: string[],
  ) {
    this.galleryKey = galleryKey;
    this.galleryUris = galleryUris;
    this.title = title;
    this.route = route;
    this.organization = organization;
    this.credit = credit;
    this.description = description;
    this.year = year;
    this.mediaAndPress = mediaAndPress ?? [];
    this.originalCredits = originalCredits ?? [];
  }

  setImage(image: GalleryImage) {
    this.image = image;
  }

  static getWidthUri(uri:string, width: number) {
    //strip any existing options,
    // add width query parameter provided
    return getResizedUri(uri, width);
  }

  hasDetail() {
    return this.title.length
      || this.organization.length
      || this.credit.length
      || this.description.length
      || this.year.length
    ;
  }

  hasOriginalCredits() {
    return this.originalCredits.length > 0;
  }

  hasMedia() {
    return this.mediaAndPress.length > 0;
  }

}
