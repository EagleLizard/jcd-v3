
const MAX_HORIZONTAL_RES = 1920;
const MAX_VERTICAL_RES = 1080;

const JCD_BASE_URI = 'https://eaglelizard.wm.r.appspot.com';
// const JCD_BASE_URI = 'http://localhost:4369';

const JCD_IMAGE_BASEPATH = `${JCD_BASE_URI}/image/v1/`;
const JCD_V3_IMAGE_BASEPATH = `${JCD_BASE_URI}/image/v2/`;

const JCD_V3_ART_PROJECT_KEY = 'ART';
const GALLERY_IMAGE_ID_SEARCH_PARAM_KEY = 'galleryImg';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const GOOGLE_ANALYTICS_TRACKING_ID = 'G-743G14MMJZ';

export {
  MAX_HORIZONTAL_RES,
  MAX_VERTICAL_RES,
  JCD_BASE_URI,
  JCD_IMAGE_BASEPATH,

  JCD_V3_IMAGE_BASEPATH,

  MONTH_NAMES,
  JCD_V3_ART_PROJECT_KEY,
  GALLERY_IMAGE_ID_SEARCH_PARAM_KEY,
  GOOGLE_ANALYTICS_TRACKING_ID,
};
