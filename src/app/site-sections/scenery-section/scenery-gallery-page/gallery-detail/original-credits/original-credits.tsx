import './original-credits.scss';
import React from 'react';

interface OriginalCreditsProps {
  originalCredits: string[];
}

export function OriginalCredits(props: OriginalCreditsProps) {
  return (
    <div className="original-credits">
      {props.originalCredits.map(((originalCredit, idx) => {
        return (
          <div
            className="original-credit"
            key={idx}>
            {
              originalCredit
            }
          </div>
        );
      }))}
    </div>
  );
}
