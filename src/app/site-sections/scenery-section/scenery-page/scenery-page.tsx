
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject } from '../../../models/jcd-entities';
import { ScenicRowDescriptor, ScenicPageService, ScenicRowPattern } from '../scenic-page-service';

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
  }, [
    isLoadingProjects,
    jcdProjects,
  ]);

  useEffect(() => {
    setIsLoadingProjects(true);
    JcdService.getProjects().then(jcdProjects => {
      let nextJcdProjects: JcdProject[];
      nextJcdProjects = jcdProjects;
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
                let rowContainerKey: string, projectRowClassName: string;
                rowContainerKey = scenicRowPattern.descriptor.id;
                projectRowClassName = scenicRowPattern.descriptor.rowClassName;
                return (
                  <div
                    className="jcd-project-row-container"
                    key={rowContainerKey}
                  >
                    <div className={`jcd-project-row ${projectRowClassName}`}>
                      {scenicRowPattern.jcdProjects.map(jcdProject => {
                        return (
                          <div
                            className="jcd-project-row-item"
                            key={jcdProject.projectKey}
                          >
                            <ScenicGalleryTile
                              jcdProject={jcdProject}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            }
          </div>
          {/* <div className="rows-container">
            {jcdProjects.map(jcdProject => {
              return (
                <div
                  className="scenic-gallery-tile-container"
                  key={jcdProject.projectKey}
                >
                  <ScenicGalleryTile
                    jcdProject={jcdProject}
                  />
                </div>
              );
            })}
          </div> */}
        </div>
      )}
    </div>
  );
}
