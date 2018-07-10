import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Header from './core/components/Header';
import CategoryLayout from './categories/components/CategoryLayout';
import Home from './core/components/Home';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Grid className="App">
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={CategoryLayout} />
        </Grid>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
