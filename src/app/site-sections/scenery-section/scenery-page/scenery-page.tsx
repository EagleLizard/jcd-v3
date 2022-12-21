
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { ScenicPageService, ScenicRowPattern } from '../scenic-page-service';
import { JcdProjectRow } from './jcd-project-row/jcd-project-row';
import { JcdV3Service } from '../../../services/jcd-v3-service';
import { JcdV3ProjectPreview } from '../../../models/jcd-models-v3/jcd-v3-project-preview';

export const SCENERY_SECTION_ROUTE = 'scenic';

const scrollPosition = {
  scrollTop: 0,
};

interface SceneryPageProps {

}

export function ScenicPage(props: SceneryPageProps) {
  const [ jcdProjectPreviews, setJcdProjectPreviews ] = useState<JcdV3ProjectPreview[]>([]);
  const [ isLoadingProjects, setIsLoadingProjects ] = useState<boolean>(true);
  const [ scenicRowPatterns, setScenicRowPatterns ] = useState<ScenicRowPattern[]>();

  useEffect(() => {
    let nextScenicRowPatterns: ScenicRowPattern[];
    if(!isLoadingProjects && (jcdProjectPreviews.length > 0)) {
      nextScenicRowPatterns = ScenicPageService.getScenicRowPatterns(jcdProjectPreviews);
      setScenicRowPatterns(nextScenicRowPatterns);
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

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, scrollPosition.scrollTop);
    }, 0);
  });

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
                      onSelect={handleSceniceProjectSelect}
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

  function handleSceniceProjectSelect(projectPreview: JcdV3ProjectPreview) {
    scrollPosition.scrollTop = document.documentElement.scrollTop;
  }
}
