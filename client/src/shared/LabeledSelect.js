import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormGroup } from 'react-bootstrap';
import { Select } from './EditableInput';


const LabeledSelect = ({ label, value, options, onChange, ...other }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <Select
      name={label.toLowerCase()}
      value={value}
      onChange={onChange}
      options={options}
      {...other}
    />
  </FormGroup>
);

LabeledSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledSelect;
