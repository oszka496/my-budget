import React from 'react';
import PropTypes from 'prop-types';

export function withLoadingSpinner(ComponentToWrap) {
  const WithLoadingHOC = ({ isLoading, ...props }) =>
    isLoading ? <div>Loading...</div> : <ComponentToWrap {...props} />;
  WithLoadingHOC.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return WithLoadingHOC;
}
