
import './about-section.scss';
import React from 'react';
import { JcdV3Service } from '../../services/jcd-v3-service';
import { getResizedUri } from '../../services/gallery-service';

import { ABOUT_SECTION_PROJECT_LIST } from './about-section-projects-list';

const ABOUT_IMAGE_WIDTH = 682;

export const ABOUT_SECTION_ROUTE = 'about';

const ABOUT_IMAGE_BUCKET_FILES: string[] = [
  'janice/janice-chan-1.jpg',
  'janice/janice-chan-2.jpg',
  'janice/janice-chan-3.jpg',
  'janice/bio-logo.png',
];

type AboutSectionProps = {

};

export function AboutSection(props: AboutSectionProps) {
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
                  })}
                />
              </div>
            );
          })}
        </div>
        <div className="about-content-container">

          <div className="about-content-section">
            <div className="heading-text text-content">
              Janice Chan is a scenic designer based in Utah Valley, USA,
            </div>
            <div className="text-content">
              highly driven by unconventional storytelling and informed by stylised art forms and surrealism. She holds a B.F.A. in Theatre Arts: Scenic Design from Utah Valley University, where she earned the Outstanding Student Award from the School of the Arts.
            </div>
            <div className="text-content">
              Her work has been featured in Utah’s iconic theatre scene, including the Rose Wagner Performing Arts Center, Sundance Summer Theatre, The Great Salt Lake Fringe Festival, Utah Renaissance Faire, and The Noorda Center for the Performing Arts to name a few. She has designed for theatre, opera, and dance.
            </div>
            <div className="text-content">
              Janice believes that human connection in storytelling is everything. Her passion for non-traditional designs offers a fresh and unique perspective in every project she pursues. She draws inspiration from her day-to-day life, her natural surroundings, and food. Heaps of food.
            </div>
            <div className="text-content">
              Janice has a background in administration in academic settings and social media marketing. She enjoys interior design and aesthetics, really good graphic design, lo-fi beats, smoked gouda on every occasion, and planning her trips solely around eating and museumgoing.
            </div>
            <div className="text-content">
              Janice serves as the Director of Scenic and Props at An Other Theater Company, a non-profit that serves to uplift and inspire the local LGBTQIA+ community. As a first-generation immigrant from Hong Kong and Melbourne, Australia, she is committed to projects that serve and centre the voices of marginalised communities, and supports safe and accessible entertainment practices during the pandemic and beyond.
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
