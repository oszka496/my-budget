import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Select as MuiSelect } from '@material-ui/core';

export const Select = ({ label, value, options, onChange, ...other }) => (
  <MuiSelect
    value={value || options[0].id}
    onChange={onChange}
    inputProps={{
      id: label.toLowerCase(),
      name: label.toLowerCase(),
    }}
    {...other}
  >
    { options.map(({ id, name }) => (
      <MenuItem value={id} key={id}>{ name }</MenuItem>
    )) }
  </MuiSelect>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
