import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { EditableInput } from 'components/form/EditableInput';
import { selectCurrenciesAll, selectCurrenciesAreLoaded } from 'currencies/currency.selectors';
import { updateProfile } from 'profile/profile.actions';
import { LabeledSelect } from '../../components/form';


const mapDispatchToProps = dispatch => ({
  editCurrency: code => dispatch(updateProfile({ currency: code })),
});

const mapStateToProps = state => ({
  isLoaded: selectCurrenciesAreLoaded(state),
  options: selectCurrenciesAll(state),
});

const CurrencySettings = ({ currency, options, editCurrency }) => (
  <EditableInput
    label="Currency"
    component={LabeledSelect}
    options={options}
    value={currency}
    onSubmit={editCurrency}
  />
);
CurrencySettings.propTypes = {
  currency: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  editCurrency: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencySettings);
