import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CurrencySettings } from 'profile/components';
import { AppLayout } from 'components/AppLayout';
import { getProfileData } from '../profile.selectors';
import { ProfileLoader } from './ProfileLoader';

const mapStateToProps = state => ({
  profile: getProfileData(state),
});

const ProfileLayout = ({ profile }) => (
  <AppLayout
    content={(
      <ProfileLoader>
        <h3>Profile</h3>
        <CurrencySettings currency={profile.currency} />
      </ProfileLoader>
    )}
  />
);

ProfileLayout.propTypes = {
  profile: PropTypes.shape({
    currency: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProfileLayout);
