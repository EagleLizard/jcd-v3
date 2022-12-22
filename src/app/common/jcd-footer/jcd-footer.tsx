
import './jcd-footer.scss';
import React from 'react';

type JcdFooterProps = {

};

export function JcdFooter(props: JcdFooterProps) {
  return (
    <div className="jcd-footer">
      <div className="jcd-footer-item footer-left">
        <div className="footer-item-content">
          janicechan.design
        </div>
      </div>
      <div className="jcd-footer-item">
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
            contact@janicechan.design
          </a>
        </div>
      </div>
    </div>
  );
}
