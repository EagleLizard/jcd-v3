
import { v4 as uuidv4 } from 'uuid';

import { JcdProject } from '../../models/jcd-entities';
import { JcdV3ProjectPreview } from '../../models/jcd-models-v3/jcd-v3-project-preview';

export enum SCENIC_ROW_PATTERN_ENUM {
  PATTERN_1 = 'PATTERN_1',
  PATTERN_2 = 'PATTERN_2',
  PATTERN_3 = 'PATTERN_3',
  PATTERN_4 = 'PATTERN_4',
  PATTERN_5 = 'PATTERN_5',
  PATTERN_6 = 'PATTERN_6',
  PATTERN_7 = 'PATTERN_7',
}

const SCENIC_ROW_PATTERNS: SCENIC_ROW_PATTERN_ENUM[] = [
  SCENIC_ROW_PATTERN_ENUM.PATTERN_1,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_2,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_3,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_4,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_5,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_6,
  SCENIC_ROW_PATTERN_ENUM.PATTERN_7,
];

const SCENIC_ROW_DESCRIPTOR_MAP: Record<SCENIC_ROW_PATTERN_ENUM, BaseScenicRowDescriptor> = {
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_1]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_1,
    numTiles: 2,
    rowClassName: 'project-row-pattern-1',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_2]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_2,
    numTiles: 2,
    rowClassName: 'project-row-pattern-2',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_3]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_3,
    numTiles: 3,
    rowClassName: 'project-row-pattern-3',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_4]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_4,
    numTiles: 2,
    rowClassName: 'project-row-pattern-4',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_5]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_5,
    numTiles: 2,
    rowClassName: 'project-row-pattern-5',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_6]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_6,
    numTiles: 3,
    rowClassName: 'project-row-pattern-6',
  },
  [SCENIC_ROW_PATTERN_ENUM.PATTERN_7]: {
    patternType: SCENIC_ROW_PATTERN_ENUM.PATTERN_7,
    numTiles: 2,
    rowClassName: 'project-row-pattern-7',
  },
};

type BaseScenicRowDescriptor = {
  patternType: SCENIC_ROW_PATTERN_ENUM;
  numTiles: number;
  rowClassName: string;
};

export type ScenicRowDescriptor = BaseScenicRowDescriptor & {
  id: string;
};

export type ScenicRowPattern = {
  descriptor: ScenicRowDescriptor;
  jcdProjects: JcdV3ProjectPreview[];
}

export class ScenicPageService {
  /*
    Returns a pattern from the list of patterns, wrapping in a loop
      so the pattern repeats if the index exceeds the array of pattern
  */
  static getScenicRowDescriptor(rowIdx: number) {
    let patternIdx: number, patternType: SCENIC_ROW_PATTERN_ENUM;
    let baseScenicRowDescriptor: BaseScenicRowDescriptor,
      scenicRowDescriptor: ScenicRowDescriptor
    ;
    patternIdx = (rowIdx < SCENIC_ROW_PATTERNS.length)
      ? rowIdx
      : rowIdx % SCENIC_ROW_PATTERNS.length
    ;
    patternType = SCENIC_ROW_PATTERNS[patternIdx];
    baseScenicRowDescriptor = SCENIC_ROW_DESCRIPTOR_MAP[patternType];
    scenicRowDescriptor = {
      ...baseScenicRowDescriptor,
      id: uuidv4(),
    };
    return scenicRowDescriptor;
  }

  static getScenicRowPatterns(jcdProjectPreviews: JcdV3ProjectPreview[]): ScenicRowPattern[] {
    let scenicRowPatterns: ScenicRowPattern[];
    let rowIdx: number, rowDescriptor: ScenicRowDescriptor;
    let currRowProjects: JcdV3ProjectPreview[];

    jcdProjectPreviews = jcdProjectPreviews.slice();

    scenicRowPatterns = [];
    rowIdx = 0;
    rowDescriptor = ScenicPageService.getScenicRowDescriptor(rowIdx);
    currRowProjects = [];

    while(jcdProjectPreviews.length) {
      let projectToAdd: JcdV3ProjectPreview;
      if(currRowProjects.length < rowDescriptor.numTiles) {
        projectToAdd = jcdProjectPreviews.shift();
        currRowProjects.push(projectToAdd);
      } else {
        scenicRowPatterns.push({
          descriptor: rowDescriptor,
          jcdProjects: currRowProjects,
        });
        currRowProjects = [];
        rowIdx++;
        rowDescriptor = ScenicPageService.getScenicRowDescriptor(rowIdx);
      }
    }
    if(currRowProjects.length > 0) {
      scenicRowPatterns.push({
        descriptor: rowDescriptor,
        jcdProjects: currRowProjects,
      });
      currRowProjects = [];
      rowIdx++;
    }

    return scenicRowPatterns;
  }
}
