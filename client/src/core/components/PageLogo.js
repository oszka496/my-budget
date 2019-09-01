import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const useStyles = makeStyles({
  logo: {
    height: '30px',
    marginRight: '8px',
  },
});

const PageLogo = () => {
  const classes = useStyles();
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={classes.logo} />
    </Link>
  );
};

export default PageLogo;
