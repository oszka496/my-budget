import React from 'react';
import { bool, func, string } from 'prop-types';
import { makeStyles, Box } from '@material-ui/core';

const gap = 1;
const circleRadius = 11;
const strokeWidth = 1;
const outerCircleRadius = circleRadius + strokeWidth + gap;
const x = outerCircleRadius + 2;
const transform = `translate(${x}, ${x})`;

const circleBoxStyles = {
  height: `${2 * x}px`,
  width: `${2 * x}px`,
  display: 'flex',
};

const innerCircleParams = color => ({
  r: circleRadius,
  fill: color,
  transform,
});
const outerCircleParams = color => ({
  r: outerCircleRadius,
  stroke: color,
  fillOpacity: 0,
  strokeWidth,
  transform,
});

const useCircleColorStyles = makeStyles({
  root: circleBoxStyles,
});

export const CircleColor = ({ color, onChange, selected }) => {
  const classes = useCircleColorStyles({ color, selected });
  return (
    <Box className={classes.root}>
      <svg onClick={() => onChange(color)}>
        <circle {...innerCircleParams(color)} />
        { selected && <circle {...outerCircleParams(color)} /> }
      </svg>
    </Box>
  );
};
CircleColor.propTypes = {
  color: string.isRequired,
  onChange: func.isRequired,
  selected: bool.isRequired,
};
