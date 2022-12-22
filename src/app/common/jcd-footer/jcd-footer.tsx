
import './jcd-footer.scss';
import React from 'react';

type JcdFooterProps = {

};

export function JcdFooter(props: JcdFooterProps) {
  return (
    <div className="jcd-footer">
      <div className="jcd-footer-item footer-left">
        <div className="footer-item-content footer-site">
          <div className="breakable-footer-item">
            <div className="breakable-content">
              janice
            </div>
            <div className="breakable-content">
              chan
            </div>
            <div className="breakable-content">
              .design
            </div>
          </div>
        </div>
      </div>
      <div className="jcd-footer-item footer-middle">
        <div className="footer-item-content">
          © 2024 Janice Chan Designs
        </div>
      </div>
      <div className="jcd-footer-item footer-right">
        <div className="footer-item-content">
          <a
            className="email-link"
            href="mailto:contact@janicechan.design"
            target="_blank"
            rel="noreferrer"
          >
            <div className="breakable-footer-item">
              <div className="breakable-content">
                contact
              </div>
              <div className="breakable-content">
                @janicechan
              </div>
              <div className="breakable-content">
                .design
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
