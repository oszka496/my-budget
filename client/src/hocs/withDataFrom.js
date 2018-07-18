import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withDataFrom = url => ComponentToWrap => {
  class WithDataFromHOC extends Component {
    componentDidMount() {
      const { onDataFetched, isLoaded } = this.props;

      if (!isLoaded) {
        fetch(url)
          .then(response => response.json())
          .then(onDataFetched);
      }
    }

    render() {
      return <ComponentToWrap {...this.state} {...this.props} />;
    }
  }
  WithDataFromHOC.propTypes = {
    onDataFetched: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  };
  return WithDataFromHOC;
};
