import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return <div className="App-sidebar">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
    </div>
}

export default Sidebar;
