import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { LabeledSelect } from 'shared';

// TODO: Get currency list from API
const options = [
  { id: 'EUR', name: 'Eur' },
  { id: 'USD', name: 'Usd' },
];

const CurrencySettings = ({ defaultCurrency }) => {
  const [currency, setCurrency] = useState(defaultCurrency);

  const handleChange = ({ target: { value } }) => {
    setCurrency(value);
  };
  return (
    <Form inline>
      <LabeledSelect
        label="Currency"
        onChange={handleChange}
        options={options}
        value={currency}
      />
      <Button type="submit">Change</Button>
    </Form>
  );
};

CurrencySettings.propTypes = {
  defaultCurrency: PropTypes.string.isRequired,
};

export default CurrencySettings;
