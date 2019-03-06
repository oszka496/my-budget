import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { EditableInput, Select } from 'shared/EditableInput';

// TODO: Get currency list from API
const options = [
  { id: 'EUR', name: 'Eur' },
  { id: 'USD', name: 'Usd' },
];

const CurrencySettings = ({ currency }) => (
  <Form horizontal>
    <EditableInput
      label="Currency"
      component={Select}
      options={options}
      value={currency}
    />
  </Form>
);


CurrencySettings.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default CurrencySettings;
