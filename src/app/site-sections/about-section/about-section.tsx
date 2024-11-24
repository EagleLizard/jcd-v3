
import './about-section.scss';
import React, { useEffect } from 'react';
import { JcdV3Service } from '../../services/jcd-v3-service';
import { getResizedUri } from '../../services/gallery-service';

import { ABOUT_SECTION_PROJECT_LIST } from './about-section-projects-list';

const ABOUT_IMAGE_WIDTH = 682;

export const ABOUT_SECTION_ROUTE = 'about';

const ABOUT_IMAGE_BUCKET_FILES: string[] = [
  'janice/janice-chan-1.jpg',
  'janice/janice-chan-2.jpg',
  'janice/janice-chan-3.jpg',
  'janice/bio-logo-light.png',
];

type AboutSectionProps = {

};

export function AboutSection(props: AboutSectionProps) {

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 0);
  });

  return (
    <div className="about-page">
      <div className="about-page-container">
        <div className="about-photo-section">
          {ABOUT_IMAGE_BUCKET_FILES.map((aboutImageBucketFile, idx) => {
            return (
              <div
                key={idx}
                className="about-photo-container"
              >
                <img
                  className="about-photo-image"
                  src={getResizedUri({
                    uri: JcdV3Service.getImageUri(aboutImageBucketFile),
                    width: ABOUT_IMAGE_WIDTH,
                    // width: 768,
                    // height: 640,
                  })}
                />
              </div>
            );
          })}
        </div>
        <div className="about-content-container">

          <div className="about-content-section">
            <div className="heading-text text-content">
              Janice Chan is a scenic designer based in Utah, UT;
            </div>
            <div className="text-content">
              she explores unconventional storytelling through surreal and stylized art forms. She holds a B.F.A. in Theatre Arts: Scenic Design from Utah Valley University, where she earned the School of the Arts Outstanding Student Award.
            </div>
            <div className="text-content">
              Her repertoire spans theatre, opera, and dance in Utah’s renowned entertainment scene: Rose Wagner Performing Arts Center, Sundance Summer Theatre, The Great Salt Lake Fringe Festival, Utah Renaissance Faire, The Noorda Center for the Performing Arts, and more.
            </div>
            <div className="text-content">
              She’s collaborated with nationally recognised directors and award-winning producers, elevating the stage with visually impactful experiences. Janice believes that human connection is the foundation of meaningful storytelling. Her non-traditional approach offers a unique perspective that challenges social norms, often with strong use of symbolism and mood.
            </div>
            <div className="text-content">
              Janice has a background in administration and marketing in academia. She enjoys interior design, existential works, and draws artistic inspiration from a love of gastronomy and all aspects of this little life.
            </div>
            <div className="text-content">
              She was featured in SLUG Magazine’s Design in Utah issue and guest-starred on Bit by Bit: Broadway’s Only Broadcast Dedicated to the Producer/Investor Relationship, hosted by award-winning producer Megan Ann Rasmussen (A Beautiful Noise: The Neil Diamond Musical, Harmony, Kinky Boots). Her work has been widely reviewed by publishers like Salt Lake Magazine, The Utah Review, BroadwayWorld, and Front Row Reviewers.
            </div>
            <div className="text-content">
              Janice’s upcoming designs will be presented at The Noorda Center for the Performing Arts and Plan-B Theatre Company.
            </div>
          </div>

          <div className="about-content-section">
            <div className="heading-text text-content">
              THE EMAIL THING
            </div>
            <div className="text-content">
              <div className="inner-text">
                Interested in collaborating on something new and exciting?
              </div>
              <br/>
              <div className="inner-text">
                Reach out at
              </div>
              <BreakingSpace/>
              <div className="inner-text">
                <a
                  className="email-link"
                  href="mailto:contact@janicechan.design"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@janicechan.design
                </a>
              </div>
            </div>
            <div className="text-content instagram">
              <div className="inner-text">
                FOR ALL THE LIFE STUFF AND THE OCCASIONAL IRREVERENT HUMOUR,
              </div>
              <br/>
              <div className="inner-text">
                FOLLOW ALONG ON
              </div>
              <BreakingSpace/>
              <div className="inner-text">
                <a
                  className="instagram-link"
                  href="https://www.instagram.com/ninetiestragedy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="inner-text">
                    INSTAGRAM
                  </div>
                  <BreakingSpace/>
                  <div className="inner-text at-handle">
                    @NINETIESTRAGEDY
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="about-content-section">
            <div className="heading-text text-content">
              <div className="inner-text">
                SELECT DESIGNS &
              </div>
              <br/>
              <div className="inner-text">
                CREATIVE PROJECTS
              </div>
            </div>
            <div className="text-content">
              {ABOUT_SECTION_PROJECT_LIST?.map(((projectLabel, idx) => {
                return (
                  <div
                    key={idx}
                    className="project-list-item"
                  >
                    {
                      projectLabel
                    }
                  </div>
                );
              }))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

type BreakingSpaceProps = {
  className?: string;
};

function BreakingSpace(props: BreakingSpaceProps) {
  return (
    <div className={'breaking-space' + (props.className ?? '')}>
      &nbsp;
    </div>
  );
}
