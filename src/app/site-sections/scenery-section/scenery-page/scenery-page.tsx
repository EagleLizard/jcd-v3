
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject } from '../../../models/jcd-entities';
import { ScenicPageService, ScenicRowPattern } from '../scenic-page-service';
import { JcdProjectRow } from './jcd-project-row/jcd-project-row';
import { JcdV3Service } from '../../../services/jcd-v3-service';
import { JcdV3ProjectPreview } from '../../../models/jcd-models-v3/jcd-v3-project-preview';

export const SCENERY_SECTION_ROUTE = 'scenery';

interface SceneryPageProps {

}

export function SceneryPage(props: SceneryPageProps) {
  const [ jcdProjectPreviews, setJcdProjectPreviews ] = useState<JcdV3ProjectPreview[]>([]);
  const [ isLoadingProjects, setIsLoadingProjects ] = useState<boolean>(true);
  const [ scenicRowPatterns, setScenicRowPatterns ] = useState<ScenicRowPattern[]>();

  useEffect(() => {
    let nextScenicRowPatterns: ScenicRowPattern[];
    if(!isLoadingProjects && (jcdProjectPreviews.length > 0)) {
      nextScenicRowPatterns = ScenicPageService.getScenicRowPatterns(jcdProjectPreviews);
      setScenicRowPatterns(nextScenicRowPatterns);
    }
    if(jcdProjectPreviews.length > 0) {
      console.log('jcdProjects:');
      console.log(jcdProjectPreviews);
    }
  }, [
    isLoadingProjects,
    jcdProjectPreviews,
  ]);

  useEffect(() => {
    setIsLoadingProjects(true);
    JcdV3Service.getProjectPreviews().then(projectPreviews => {
      setJcdProjectPreviews(projectPreviews);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setIsLoadingProjects(false);
    });
  }, []);

  return (
    <div className="scenery-page">
      {(
        !isLoadingProjects
        && (jcdProjectPreviews.length > 0)
      ) && (
        <div className="scenic-galleries">
          <div className="jcd-project-rows-container">
            {
              scenicRowPatterns?.map((scenicRowPattern) => {
                let rowContainerKey: string;
                rowContainerKey = scenicRowPattern.descriptor.id;
                return (
                  <div
                    className="jcd-project-row-container"
                    key={rowContainerKey}
                  >
                    <JcdProjectRow
                      scenicRowPattern={scenicRowPattern}
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      )}
    </div>
  );
}
