import React from 'react';
import { string } from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '4px 0 16px 8px',
  flexGrow: 1,
  paddingLeft: '16px',
  alignItems: 'flex-end',
};

const colorBoxStyles = ({ color }) => ({
  background: color,
  height: '50px',
  width: '100%',
  borderRadius: '4px',
});
const useColorBoxStyles = makeStyles({ root: colorBoxStyles, container: containerStyles });

export const ColorBox = ({ color }) => {
  const classes = useColorBoxStyles({ color });
  return (
    <Box className={classes.container}>
      <Box className={classes.root} />
      <Typography variant="subtitle2" color="textSecondary">Selected color</Typography>
    </Box>
  );
};
ColorBox.propTypes = {
  color: string,
};
