
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject } from '../../../models/jcd-entities';
import { ScenicPageService, ScenicRowPattern } from '../scenic-page-service';
import { JcdProjectRow } from './jcd-project-row/jcd-project-row';

export const SCENERY_SECTION_ROUTE = 'scenery';

interface SceneryPageProps {

}

export function SceneryPage(props: SceneryPageProps) {
  const [ jcdProjects, setJcdProjects ] = useState<JcdProject[]>([]);
  const [ isLoadingProjects, setIsLoadingProjects ] = useState<boolean>(true);
  const [ scenicRowPatterns, setScenicRowPatterns ] = useState<ScenicRowPattern[]>();

  useEffect(() => {
    let nextScenicRowPatterns: ScenicRowPattern[];
    if(!isLoadingProjects && (jcdProjects.length > 0)) {
      nextScenicRowPatterns = ScenicPageService.getScenicRowPatterns(jcdProjects);
      setScenicRowPatterns(nextScenicRowPatterns);
    }
    if(jcdProjects.length > 0) {
      console.log('jcdProjects:');
      console.log(jcdProjects);
    }
  }, [
    isLoadingProjects,
    jcdProjects,
  ]);

  useEffect(() => {
    setIsLoadingProjects(true);
    JcdService.getProjects().then(jcdProjects => {
      let nextJcdProjects: JcdProject[];
      nextJcdProjects = jcdProjects;
      /*
        TODO: Delete this. Increating number of
          projects srbitrarily to test layout
      */
      // nextJcdProjects = nextJcdProjects
      //   .concat(
      //     nextJcdProjects.slice(0, 4)
      //   )
      // ;
      setJcdProjects(nextJcdProjects);
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
        && (jcdProjects.length > 0)
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
