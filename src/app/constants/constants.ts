
const MAX_HORIZONTAL_RES = 1920;
const MAX_VERTICAL_RES = 1600;

const JCD_BASE_URI = 'https://eaglelizard.wm.r.appspot.com';
// const JCD_BASE_URI = 'http://localhost:4369';
// const EZD_API_BASE_URI = 'http://localhost:4446';
const EZD_API_BASE_URI = 'https://ezd-api-mbp.eaglelizard.com';

const JCD_IMAGE_BASEPATH = `${JCD_BASE_URI}/image/v1/`;
const JCD_V3_IMAGE_BASEPATH = `${JCD_BASE_URI}/image/v2/`;
const EZD_API_IMAGE_BASEPATH = `${EZD_API_BASE_URI}/img/v1`;

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
  EZD_API_IMAGE_BASEPATH,

  MONTH_NAMES,
  JCD_V3_ART_PROJECT_KEY,
  GALLERY_IMAGE_ID_SEARCH_PARAM_KEY,
  GOOGLE_ANALYTICS_TRACKING_ID,
};

export const EZD_CONSTANTS = {
  EZD_API_BASE_URI,
} as const;
