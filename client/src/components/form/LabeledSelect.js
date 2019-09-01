import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const LabeledSelect = ({ label, value, options, onChange, ...other }) => (
  <FormControl>
    <InputLabel htmlFor={label.toLowerCase()}>{ label }</InputLabel>
    <Select
      value={value || options[0].id}
      onChange={onChange}
      inputProps={{
        name: label.toLowerCase(),
        id: label.toLowerCase(),
      }}
      {...other}
    >
      { options.map(({ id, name }) => (
        <MenuItem value={id} key={id}>{ name }</MenuItem>
      )) }
    </Select>
  </FormControl>
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
