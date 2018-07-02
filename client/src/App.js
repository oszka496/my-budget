import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryLayout from "./components/CategoryLayout";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Sidebar />
                    <Route exact path='/' component={Home} />
                    <Route path='/categories' component={CategoryLayout} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
