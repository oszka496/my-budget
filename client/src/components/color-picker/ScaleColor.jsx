import React from 'react';
import { bool, func, string } from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';

const boxStyles = ({ color, selected }) => ({
  background: color,
  width: '42px',
  height: selected ? '18px' : '12px',
  borderRadius: selected ? '4px' : 0,
});
const useScaleColorStyles = makeStyles({ box: boxStyles });

export const ScaleColor = ({ color, onChange, selected }) => {
  const classes = useScaleColorStyles({ color, selected });
  return (
    <Box className={classes.box} onClick={() => onChange(color)} />
  );
};
ScaleColor.propTypes = {
  color: string.isRequired,
  selected: bool.isRequired,
  onChange: func.isRequired,
};
