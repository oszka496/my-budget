import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


const LabeledSelect = ({ label, value, options, onChange, ...other }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="select"
      name={label.toLowerCase()}
      value={value}
      onChange={onChange}
      {...other}
    >
      {options.map(op => <option key={op.id} value={op.id}>{op.name}</option>)}
    </FormControl>
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
