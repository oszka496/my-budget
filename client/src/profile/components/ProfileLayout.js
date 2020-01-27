import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CurrencySettings } from 'profile/components';
import { AppLayout } from 'components/AppLayout';
import { getProfileData } from '../profile.selectors';

const mapStateToProps = state => ({
  profile: getProfileData(state),
});

const ProfileLayout = ({ profile }) => (
  <AppLayout
    content={(
      <>
        <h3>Profile</h3>
        <CurrencySettings currency={profile.currency} />
      </>
    )}
  />
);

ProfileLayout.propTypes = {
  profile: PropTypes.shape({
    currency: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(ProfileLayout);
