
import './scenery-page.scss';
import React, { useEffect, useState } from 'react';
import { ScenicGalleryTile } from './scenic-gallery-tile/scenic-gallery-tile';
import { JcdService } from '../../../services/jcd-service';
import { JcdProject } from '../../../models/jcd-entities';

export const SCENERY_SECTION_ROUTE = 'scenery';

interface SceneryPageProps {

}

export function SceneryPage(props: SceneryPageProps) {
  const [ jcdProjects, setJcdProjects ] = useState<JcdProject[]>([]);
  const [ isLoadingProjects, setIsLoadingProjects ] = useState<boolean>(true);

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
      {!isLoadingProjects && (
        <div className="scenic-galleries">
          <div className="rows-container">
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
          </div>
        </div>
      )}
    </div>
  );
}

