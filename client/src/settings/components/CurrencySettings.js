import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { LabeledSelect } from 'shared';


const CurrencySettings = () => {
  const [currency, setCurrency] = useState('EUR');
  const options = [
    { id: 'EUR', name: 'Eur' },
    { id: 'USD', name: 'Usd' },
  ];

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

export default CurrencySettings;
