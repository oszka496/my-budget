import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { EditableInput, Select } from 'shared/EditableInput';
import api from 'api';
import { withDataFrom, withLoadingSpinner } from 'hocs';
import { raiseError } from 'core/message.actions';
import { selectCurrenciesAll, selectCurrenciesAreLoaded } from 'currencies/currency.selectors';
import { currenciesFetched } from 'currencies/currency.actions';
import { profileUpdated } from '../profile.actions';


const mapDispatchToProps = dispatch => ({
  onDataFetched: currencies => dispatch(currenciesFetched(currencies)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
  editCurrency: code => editCurrencyThunk(code, dispatch),
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

const CurrencySettings = ({ currency, options, editCurrency }) => (
  <Form horizontal>
    <EditableInput
      label="Currency"
      component={Select}
      options={options}
      value={currency}
      onSubmit={editCurrency}
    />
  </Form>
);

const CURRENCY_API = api.currency.list();
const CurrencySettingsWithData = withDataFrom(CURRENCY_API)(
  withLoadingSpinner(CurrencySettings),
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
)(CurrencySettingsWithData);
