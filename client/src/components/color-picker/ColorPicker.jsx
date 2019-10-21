import React, { useState } from 'react';
import { makeStyles, Paper, Box } from '@material-ui/core';
import { theme } from 'core/theme.styles';
import { CircleColorPicker } from './CircleColorPicker';
import { ColorBox } from './ColorBox';
import { mainColors } from './colors';
import { ScaleColorPicker } from './ScaleColorPicker';

const colorPickerStyles = {
  paper: {
    width: 'fit-content',
    padding: '8px',
  },
};
const useColorPickerStyles = makeStyles(colorPickerStyles);

export const ColorPicker = () => {
  const [mainColor, setMainColor] = useState(theme.palette.primary.main);
  const [color, setColor] = useState(theme.palette.primary.main);
  const classes = useColorPickerStyles();

  const onChange = (col) => {
    setColor(col);
    if (mainColors.includes(col)) {
      setMainColor(col);
    }
  };
  const props = { color, onChange };

  return (
    <Paper className={classes.paper}>
      <Box display="flex" alignItems="end">
        <CircleColorPicker {...props} />
        <ColorBox color={color} />
      </Box>
      <ScaleColorPicker {...props} mainColor={mainColor} />
    </Paper>
  );
};
