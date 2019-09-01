import React from 'react';
import { Button as MuiButton, withStyles } from '@material-ui/core';

const styles = {
  root: {
    marginTop: '16px',
    alignSelf: 'flex-end',
  },
};
const Button = withStyles(styles)(MuiButton);
const SubmitButton = (props) => <Button color="primary" type="submit" {...props} />;

export default SubmitButton;
