
import './jcd-project-row.scss';
import React from 'react';
import { ScenicRowPattern } from '../../scenic-page-service';
import { ScenicGalleryTile } from '../scenic-gallery-tile/scenic-gallery-tile';
import { JcdV3ProjectPreview } from '../../../../models/jcd-models-v3/jcd-v3-project-preview';

type JcdProjectRowProps = {
  scenicRowPattern: ScenicRowPattern;
  onSelect?: (projectPreview: JcdV3ProjectPreview) => void;
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
              onClick={() => {
                handleScenicGalleryTileClick(jcdProject);
              }}
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

  function handleScenicGalleryTileClick(projectPreview: JcdV3ProjectPreview) {
    console.log(projectPreview);
    props.onSelect?.(projectPreview);
  }
}
