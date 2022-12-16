
import { JCD_BASE_URI } from '../constants/constants';
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
}
