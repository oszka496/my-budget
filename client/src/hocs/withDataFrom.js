import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withDataFrom = url => ComponentToWrap => {
  class WithDataFromHOC extends Component {
    state = {
      isLoading: true,
    };

    componentDidMount() {
      const { onDataFetched } = this.props;

      fetch(url)
        .then(response => response.json())
        .then(onDataFetched)
        .then(() => this.setState({ isLoading: false }));
    }

    render() {
      return <ComponentToWrap {...this.state} {...this.props} />;
    }
  }
  WithDataFromHOC.propTypes = {
    onDataFetched: PropTypes.func.isRequired,
  };
  return WithDataFromHOC;
};
