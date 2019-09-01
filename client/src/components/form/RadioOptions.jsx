import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';

const RadioOptions = ({ onChange, name, value, options }) => (
  <RadioGroup
    aria-label={name}
    name={name}
    value={value}
    onChange={onChange}
  >
    { options.map(op => (
      <FormControlLabel
        key={`${name}-${op.value}`}
        value={op.value}
        control={<Radio color="primary" />}
        label={op.label}
        labelPlacement="end"
      />
    )) }
  </RadioGroup>
);

RadioOptions.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  options: arrayOf(shape({
    label: string,
    value: string,
  })).isRequired,
  onChange: func.isRequired,
};

export default RadioOptions;
