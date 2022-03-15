
import { isObject } from '../common/type-validation/validate-primitives';
import {
  JCD_BASE_URI,
  MONTH_NAMES,
  JCD_IMAGE_BASEPATH,
} from '../constants/constants';
import { JcdProject, JcdProjectDetails, JcdProjectPage } from '../models/jcd-entities';

export class JcdService {

  static async getProjects(): Promise<JcdProject[]> {
    let rawProjects: unknown[], uri: string;
    let resp: Response, rawRespData: any;
    let projects: JcdProject[];
    uri = `${JCD_BASE_URI}/jcd/v0/project`;
    resp = await fetch(uri);
    rawRespData = await resp.json();
    try {
      if(
        !isObject(rawRespData?.projects)
        || !Array.isArray(rawRespData?.projects)
      ) {
        throw new Error('/jcd/v0/project response has an incorrect schema');
      }
      rawProjects = rawRespData.projects;
      projects = rawProjects.map(JcdProject.deserialize);

      return projects;
    } catch(e) {
      console.error(e);
      throw new Error('/jcd/v0/project endpoint returned unexpected datatype');
    }
  }

  static async getProject(projectRoute: string): Promise<JcdProject> {
    let rawProject: unknown[], uri: string;
    let resp: Response, rawRespData: any;
    let project: JcdProject;
    uri = `${JCD_BASE_URI}/jcd/v0/project/${projectRoute}`;
    resp = await fetch(uri);
    rawRespData = await resp.json();
    try {
      if(!isObject(rawRespData?.project)) {
        throw new Error(`/jcd/v0/project/${projectRoute} response has an incorrect schema`);
      }
      rawProject = rawRespData.project;
      project = JcdProject.deserialize(rawProject);
      return project;

    } catch(e) {
      console.error(e);
      throw new Error(`/jcd/v0/project/${projectRoute} endpoint returned unexpected datatype`);
    }
  }

  static async getProjectPage(projectKey: string): Promise<JcdProjectPage> {
    let rawProjectPage: unknown[], uri: string;
    let resp: Response, rawRespData: any;
    let projectPage: JcdProjectPage;
    uri = `${JCD_BASE_URI}/jcd/v0/project/page/${projectKey}`;
    resp = await fetch(uri);
    rawRespData = await resp.json();
    try {
      if(!isObject(rawRespData?.projectPage)) {
        throw new Error(`/jcd/v0/project/page/${projectKey} response has an incorrect schema`);
      }
      rawProjectPage = rawRespData.projectPage;
      projectPage = JcdProjectPage.deserialize(rawProjectPage);
      return projectPage;

    } catch(e) {
      console.error(e);
      throw new Error(`/jcd/v0/project/page/${projectKey} endpoint returned unexpected datatype`);
    }
  }

  static getImageUri(resource: string): string {
    return `${JCD_IMAGE_BASEPATH}${resource}`;
  }

  static getDisplayDate(projectDetails: JcdProjectDetails): string {
    let month: number, year: number;
    let displayDate: string;
    month = projectDetails.month - 1; // subtract 1 because JS months are 0 indexed
    year = projectDetails.year;
    displayDate = `${MONTH_NAMES[month]} ${year}`;
    return displayDate;
  }

}
