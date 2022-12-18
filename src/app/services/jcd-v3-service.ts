
import { JCD_BASE_URI, JCD_V3_IMAGE_BASEPATH, MONTH_NAMES } from '../constants/constants';
import { JcdV3Image } from '../models/jcd-models-v3/jcd-v3-image';
import { JcdV3Project } from '../models/jcd-models-v3/jcd-v3-project';
import { JcdV3ProjectPreview } from '../models/jcd-models-v3/jcd-v3-project-preview';

export class JcdV3Service {
  static async getProjectPreviews(): Promise<JcdV3ProjectPreview[]> {
    let uri: string;
    let resp: Response, rawRespData: unknown;
    let projectPreviews: JcdV3ProjectPreview[];
    uri = `${JCD_BASE_URI}/jcd/v1/project`;
    resp = await fetch(uri);
    rawRespData = await resp.json();
    if(!Array.isArray(rawRespData)) {
      throw new Error('/jcd/v1/project response has an incorrect schema');
    }
    try {
      projectPreviews = rawRespData.map(JcdV3ProjectPreview.deserialize);
    } catch(e) {
      throw new Error('/jcd/v1/project endpoint returned unexpected datatype');
    }
    return projectPreviews;
  }

  static async getProjectByRoute(projectRoute: string): Promise<JcdV3Project> {
    let uri: string;
    let resp: Response, rawRespData: unknown;
    let jcdProject: JcdV3Project;
    uri = `${JCD_BASE_URI}/jcd/v1/project/${projectRoute}`;
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

  static async getProjectImages(projectKey: string): Promise<JcdV3Image[]> {
    let uri: string;
    let resp: Response, rawRespData: unknown;
    let jcdImages: JcdV3Image[];
    uri = `${JCD_BASE_URI}/jcd/v1/project/images/${projectKey}`;
    resp = await fetch(uri);
    rawRespData = await resp.json();
    if(!Array.isArray(rawRespData)) {
      throw new Error(`/jcd/v1/project/images/${projectKey} response has an incorrect schema`);
    }
    try {
      jcdImages = rawRespData.map(JcdV3Image.deserialize);
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
    } catch(e) {
      console.error(e);
      throw new Error(`/jcd/v1/project/images/${projectKey} endpoint returned unexpected datatype`);
    }
  }

  static getDisplayDate(month: number, year: number): string {
    let displayDate: string;
    let monthStr: string;
    monthStr = MONTH_NAMES[month - 1]; // subtract 1 because JS months are 0 indexed
    displayDate = `${monthStr} ${year}`;
    return displayDate;
  }

  static getImageUri(resource: string): string {
    return `${JCD_V3_IMAGE_BASEPATH}${resource}`;
  }

}
