import React from 'react';
import PropTypes from 'prop-types';

export const BitBucket = ({
  viewBox,
  width,
  height,
  className="cls-bitBucket"
}) => {
  return (
    <svg className="technologies-cloud" viewBox={viewBox} width={width} height={height}>
      <g id="Layer_2-2" className={className} data-name="Layer 2">
        <title>BitBucket</title>
        <path className="cls-21" d="M85.82,286.63c-8.27,0-15.09,2.23-15.09,5,0,.72,1.77,11.22,2.56,15.36.33,1.9,5.18,4.59,12.54,4.59S98,308.95,98.36,307c.72-4.13,2.56-14.64,2.56-15.36C100.79,288.86,94.16,286.63,85.82,286.63Zm0,21.59A4.73,4.73,0,0,1,81,303.43a4.79,4.79,0,0,1,9.58,0A4.82,4.82,0,0,1,85.82,308.22Zm0-15.09c-5.32,0-9.58-.85-9.58-2s4.27-2,9.58-2,9.58.85,9.58,2S91.14,293.13,85.82,293.13Z" transform="translate(-58.73 -95.39)" />
        <path className="cls-21" d="M96.78,311a.66.66,0,0,0-.46.13,17.55,17.55,0,0,1-10.3,3c-6.69,0-10.3-3-10.3-3a2,2,0,0,0-.46-.13c-.33,0-.53.13-.53.53v.13c.53,3.08,1.05,5.32,1.05,5.64.46,2.23,4.86,4,10.17,4s9.78-1.77,10.17-4c0-.33.46-2.56,1.05-5.64v-.13c0-.26-.13-.53-.39-.53Z" transform="translate(-58.73 -95.39)" />
        <circle className="cls-21" cx="27.09" cy="207.98" r="2.36" />
      </g>
    </svg>
  )
}

BitBucket.propTypes = {
  viewBox: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
}
