
// const BASEPATH = 'https://eaglelizard-files.herokuapp.com/v2/image/';
const BASEPATH = 'http://localhost:4269/v2/image/';

export class GalleryURIs {
  previewUri: string;
  galleryUris: string[];
  constructor(previewUri: string, galleryUris: string[]) {
    this.previewUri = imageUri(previewUri);
    this.galleryUris = imageUris(galleryUris);
  }
}

function imageUri(fileKey: string) {
  return `${BASEPATH}${fileKey}`;
}

function imageUris(fileKeys: string []) {
  return fileKeys.map(imageUri);
}
