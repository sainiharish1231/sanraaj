import React from 'react';
import PropTypes from 'prop-types';

export const Sentry = ({
  viewBox,
  width,
  height,
  className="cls-sentry"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_13" className={className} data-name="Layer 13">
        <title>Sentry</title>
        <path className="cls-27" d="M499.74,204.67a5.15,5.15,0,0,1-1.14,7.17,5.4,5.4,0,0,1-3.59,1h-4.2a22.92,22.92,0,0,0,.09-2.45c0-.87,0-1.75-.09-2.62h2.71a1.25,1.25,0,0,0,1.22-1.22h0a1.24,1.24,0,0,0-.17-.52l-17.67-30.7a1.17,1.17,0,0,0-1.66-.35c-.17.09-.35.26-.35.35l-2.8,4.9a38.39,38.39,0,0,1,15,27.73c.09,1,.09,1.75.09,2.62a22.92,22.92,0,0,1-.09,2.45H473.32a22.11,22.11,0,0,0,.09-2.45,23.94,23.94,0,0,0-8.4-18.28l-1.84-4.11c3.32,3.15,5.69,15,6.39,19.77.09,1,.17,1.75.17,2.62a23,23,0,0,1-.17,2.45H456.7a5.06,5.06,0,0,1-5.6-4.55,5,5,0,0,1,1-3.59l2.62-4.46a20.11,20.11,0,0,1,4.11,3.06l-1.57,2.62a1.14,1.14,0,0,0,1,1.75h6.3a15.69,15.69,0,0,0-7.87-10.85L463.7,185a29.18,29.18,0,0,1,14.87,22.92h3.67a33.3,33.3,0,0,0-16.79-26.15l6.12-10.15a5.06,5.06,0,0,1,6.74-2.62,5.12,5.12,0,0,1,2.62,2.62l18.81,33.06Z" transform="translate(-58.73 -95.39)" />
      </g>
    </svg>
  )
}


Sentry.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
