import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';

const LabeledInput = ({ label, value, type, onChange, ...other }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      name={label.toLowerCase()}
      type={type}
      value={value}
      onChange={onChange}
      {...other}
    />
  </FormGroup>
);

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledInput;
