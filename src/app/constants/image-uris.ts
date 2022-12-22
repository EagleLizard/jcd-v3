
import { JCD_IMAGE_BASEPATH } from './constants';

export const LOGO = imageUri('JaniceChanLogo2022-min.png');
export const JCD_V3_LOGO_BUCKET_FILE = 'jcd-v3-primary-logo-2022.png';

function imageUri(fileKey: string) {
  return `${JCD_IMAGE_BASEPATH}${fileKey}`;
}

function imageUris(fileKeys: string []) {
  return fileKeys.map(imageUri);
}
