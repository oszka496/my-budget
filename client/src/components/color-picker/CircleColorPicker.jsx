import React from 'react';
import { func, string } from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { CircleColor } from './CircleColor';
import { mainColors } from './colors';

const circlePickerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  marginBottom: '8px',
  width: 'fit-content',
};
const useCiclePickerStyles = makeStyles({ root: circlePickerStyles });

export const CircleColorPicker = ({ color, onChange }) => {
  const availableColors = mainColors;
  const classes = useCiclePickerStyles();
  const mapper = col => <CircleColor color={col} onChange={onChange} selected={col === color} />;

  return (
    <div className={classes.root}>
      {availableColors.map(mapper)}
    </div>
  );
};
CircleColorPicker.propTypes = {
  color: string.isRequired,
  onChange: func.isRequired,
};
