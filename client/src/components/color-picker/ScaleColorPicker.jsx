import React from 'react';
import { func, string } from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';
import { colorsByMain } from './colors';
import { ScaleColor } from './ScaleColor';

const containerStyles = {
  'display': 'flex',
  'alignItems': 'center',
  '&>div:not(:last-child)': {
    marginRight: '1px',
  },
};
const useColorScaleStyles = makeStyles({ container: containerStyles });

export const ScaleColorPicker = ({ mainColor, color, onChange }) => {
  const classes = useColorScaleStyles();
  const availableColors = colorsByMain[mainColor].slice(2, 10);
  return (
    <Box className={classes.container}>
      {availableColors.map(col => <ScaleColor color={col} onChange={onChange} selected={col === color} />)}
    </Box>
  );
};
ScaleColorPicker.propTypes = {
  color: string.isRequired,
  mainColor: string.isRequired,
  onChange: func.isRequired,
};
