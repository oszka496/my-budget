import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Header from './components/core/Header';
import CategoryLayout from './components/category/CategoryLayout';
import Home from './components/Home';

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
