import React from 'react';
import PropTypes from 'prop-types';

export const Git = ({
  viewBox,
  width,
  height,
  className="cls-git"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_29" className={className} data-name="Layer 29">
        <title>Git</title>
        <path className="cls-10" d="M111.59,355.09,88.1,331.6a3.41,3.41,0,0,0-4.91,0h0l-4.91,4.91,6.22,6.22a4.14,4.14,0,0,1,5.24,2.54,3.84,3.84,0,0,1,0,2.7l6,6a4.12,4.12,0,1,1-2.54,5.24,3.86,3.86,0,0,1,.08-2.86l-5.57-5.57V365.4a5.25,5.25,0,0,1,1.06.82,4.11,4.11,0,1,1-5.81,0,4.68,4.68,0,0,1,1.31-.9V350.59A4.07,4.07,0,0,1,82,345.27v-.08L75.82,339l-16,15.88a3.41,3.41,0,0,0,0,4.91h0l23.57,23.49a3.41,3.41,0,0,0,4.91,0h0L111.59,360a3.56,3.56,0,0,0,0-4.91h0" transform="translate(-58.73 -95.39)" />
      </g>
    </svg>
  )
}


Git.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
