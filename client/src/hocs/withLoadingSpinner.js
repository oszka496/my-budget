import React from 'react';
import PropTypes from 'prop-types';

export function withLoadingSpinner(ComponentToWrap) {
  const WithLoadingHOC = ({ isLoading }) =>
    isLoading ? <div>Loading...</div> : <ComponentToWrap />;
  WithLoadingHOC.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return WithLoadingHOC;
}
