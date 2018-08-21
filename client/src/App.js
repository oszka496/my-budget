import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { TransactionLayout } from './transactions/components';
import { CategoryLayout } from './categories/components';
import { Header, Home, MessageList } from './core/components';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <MessageList />
      <Grid className="App">
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={CategoryLayout} />
        <Route path="/transactions" component={TransactionLayout} />
      </Grid>
    </Fragment>
  </BrowserRouter>
);

export default App;
