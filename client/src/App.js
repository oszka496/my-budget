import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CategoryLayout from './components/CategoryLayout';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={CategoryLayout} />
      </div>
    </BrowserRouter>
  );
}

export default App;
