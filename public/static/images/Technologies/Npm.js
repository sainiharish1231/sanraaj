import React from 'react';
import PropTypes from 'prop-types';

export const Npm = ({
  viewBox,
  width,
  height,
  className="cls-npm"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_23" className={className} data-name="Layer 23">
        <title>NPM</title>
        <path className="cls-82" d="M384.06,326.26h74.06v24.66h-37V355H404.59v-4.12H384.06V326.26Zm4.12,20.62h8.25V334.51h4.12v12.37h4.12V330.38H388.18Zm20.62-16.49v20.54H417V346.8h8.25V330.3H408.8Zm8.25,4.12h4.12v8.25H417Zm12.29-4.12v16.49h8.25V334.51h4.12v12.37h4.12V334.51H450v12.37h4.12V330.38Z" transform="translate(23 -309)" />
      </g>
    </svg>
  )
}


Npm.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}