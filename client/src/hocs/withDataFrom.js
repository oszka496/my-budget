import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../api';

export const withDataFrom = url => ComponentToWrap => {
  class WithDataFromHOC extends Component {
    componentDidMount() {
      const { onDataFetched, onFetchFailed, isLoaded } = this.props;
      if (!isLoaded) {
        api.requests.get(url)
          .then(onDataFetched)
          .catch(onFetchFailed);
      }
    }

    render() {
      return <ComponentToWrap {...this.state} {...this.props} />;
    }
  }
  WithDataFromHOC.propTypes = {
    onDataFetched: PropTypes.func.isRequired,
    onFetchFailed: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  };
  return WithDataFromHOC;
};
