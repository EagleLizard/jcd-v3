
import { EZD_API_IMAGE_BASEPATH, EZD_CONSTANTS } from '../constants/constants';
import { JcdV3Image } from '../models/jcd-models-v3/jcd-v3-image';
import { JcdV3Project } from '../models/jcd-models-v3/jcd-v3-project';
import { JcdV3ProjectPreview } from '../models/jcd-models-v3/jcd-v3-project-preview';

export const EzdApiService = {
  getProjectByRoute,
  getProjectImages,
  getProjectPreviews,
  getImageUri,
} as const;

async function getProjectByRoute(projectRoute: string): Promise<JcdV3Project> {
  let uri: string;
  let resp: Response;
  let rawRespData: unknown;
  let jcdProject: JcdV3Project;
  uri = `${EZD_CONSTANTS.EZD_API_BASE_URI}/jcd/v1/project/${projectRoute}`;
  resp = await fetch(uri);
  rawRespData = await resp.json();
  try {
    jcdProject = JcdV3Project.deserialize(rawRespData);
    return jcdProject;
  } catch(e) {
    console.error(e);
    throw new Error(`/jcd/v1/project/${projectRoute} endpoint returned unexpected datatype`);
  }
}

async function getProjectImages(projectKey: string): Promise<JcdV3Image[]> {
  let uri: string;
  let resp: Response, rawRespData: unknown;
  let jcdImages: JcdV3Image[];
  uri = `${EZD_CONSTANTS.EZD_API_BASE_URI}/jcd/v1/project/images/${projectKey}`;
  resp = await fetch(uri);
  rawRespData = await resp.json();
  if(!Array.isArray(rawRespData)) {
    throw new Error(`/jcd/v1/project/images/${projectKey} response has an incorrect schema`);
  }
  try {
    jcdImages = rawRespData.map(JcdV3Image.deserialize);
  } catch(e) {
    console.error(e);
    throw new Error(`/jcd/v1/project/images/${projectKey} endpoint returned unexpected datatype`);
  }
  jcdImages.sort((a, b) => {
    if(a.orderIdx > b.orderIdx) {
      return 1;
    } else if(a.orderIdx < b.orderIdx) {
      return -1;
    } else {
      return 0;
    }
  });
  return jcdImages;
}

async function getProjectPreviews(): Promise<JcdV3ProjectPreview[]> {
  let uri: string;
  let resp: Response;
  let rawRespData: unknown;
  let projectPreviews: JcdV3ProjectPreview[];
  uri = `${EZD_CONSTANTS.EZD_API_BASE_URI}/jcd/v1/project`;
  resp = await fetch(uri);
  rawRespData = await resp.json();
  if(!Array.isArray(rawRespData)) {
    throw new Error('ezd-api: /jcd/v1/project response has an incorrect schema');
  }
  projectPreviews = rawRespData.map(JcdV3ProjectPreview.deserialize);
  return projectPreviews;
}

function getImageUri(resource: string): string {
  return `${EZD_API_IMAGE_BASEPATH}/${resource}`;
}
