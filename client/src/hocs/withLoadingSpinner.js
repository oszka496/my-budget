import React from 'react';
import PropTypes from 'prop-types';

export function withLoadingSpinner(ComponentToWrap) {
  const WithLoadingHOC = ({ isLoaded, ...props }) =>
    isLoaded ? <ComponentToWrap {...props} /> : <div>Loading...</div>;
  WithLoadingHOC.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
  };
  return WithLoadingHOC;
}
