import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel } from '@material-ui/core';
import { Select } from './Select';


const LabeledSelect = (props) => {
  const { label } = props;
  return (
    <FormControl>
      <InputLabel htmlFor={label.toLowerCase()} shrink>{ label }</InputLabel>
      <Select {...props} />
    </FormControl>
  );
};

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
