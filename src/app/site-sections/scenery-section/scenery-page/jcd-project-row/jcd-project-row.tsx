
import './jcd-project-row.scss';
import React from 'react';
import { ScenicRowPattern } from '../../scenic-page-service';
import { ScenicGalleryTile } from '../scenic-gallery-tile/scenic-gallery-tile';

type JcdProjectRowProps = {
  scenicRowPattern: ScenicRowPattern;
};

export function JcdProjectRow(props: JcdProjectRowProps) {

  const scenicRowPattern = props.scenicRowPattern;
  const projectRowClassName = scenicRowPattern.descriptor.rowClassName;

  return (
    <div className="jcd-project-row">
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
}
