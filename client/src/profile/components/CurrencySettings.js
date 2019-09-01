import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { EditableInput } from 'components/form/EditableInput';
import api from 'api';
import { raiseError } from 'core/message.actions';
import { selectCurrenciesAll, selectCurrenciesAreLoaded } from 'currencies/currency.selectors';
import { currencySlice } from 'currencies/currency.reducer';
import { profileUpdated } from 'profile/profile.actions';
import { LabeledSelect } from '../../components/form';

const { actions } = currencySlice;

const mapDispatchToProps = dispatch => ({
  editCurrency: code => editCurrencyThunk(code, dispatch),
  fetchCurrencies: () => dispatch(actions.fetchCurrencies()),
});

const mapStateToProps = state => ({
  isLoaded: selectCurrenciesAreLoaded(state),
  options: selectCurrenciesAll(state),
});

const PROFILE_API = api.profile();
const editCurrencyThunk = (code, dispatch) => {
  const body = JSON.stringify({ currency: code });
  api.requests.patch(PROFILE_API, body)
    .then(response => dispatch(profileUpdated(response)))
    .catch(error => dispatch(raiseError(error.toString())));
};

const CurrencySettings = ({ currency, options, editCurrency, fetchCurrencies }) => {
  useEffect(() => { fetchCurrencies(); }, [fetchCurrencies]);

  return (
    <EditableInput
      label="Currency"
      component={LabeledSelect}
      options={options}
      value={currency}
      onSubmit={editCurrency}
    />
  );
};

const CurrencySettingsWithData = CurrencySettings;


CurrencySettings.propTypes = {
  currency: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  editCurrency: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencySettingsWithData);
