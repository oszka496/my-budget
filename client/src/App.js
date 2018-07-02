import React, { Component } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CategoryList/>
      </div>
    );
  }
}

export default App;
