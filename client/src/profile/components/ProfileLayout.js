import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CurrencySettings } from 'profile/components';
import api from 'api';
import { raiseError } from 'core/message.actions';
import { withDataFrom, withLoadingSpinner } from 'hocs';
import { profileFetched } from '../profile.actions';
import { selectProfileDetails, selectProfileIsLoaded } from '../profile.selectors';

const PROFILE_API = api.profile();

const mapStateToProps = state => ({
  isLoaded: selectProfileIsLoaded(state),
  profile: selectProfileDetails(state),
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: profile => dispatch(profileFetched(profile)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
});

const ProfileLayout = ({ profile }) => (
  <div>
    <h3>Profile</h3>
    <CurrencySettings defaultCurrency={profile.currency} />
  </div>
);

ProfileLayout.propTypes = {
  profile: PropTypes.shape({
    currency: PropTypes.string,
  }).isRequired,
};

const LayoutWithWrappers = withDataFrom(PROFILE_API)(withLoadingSpinner(ProfileLayout));
export default connect(mapStateToProps, mapDispatchToProps)(LayoutWithWrappers);
