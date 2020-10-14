import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menus from './menu.jsx';

import Table from './Table.jsx'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span className="logo_position">
        <img src={logo} className="App-logo" alt="logo" />
        </span >
        <span className="menu">
        <Menus/>
          </span>
      </div>
      <div className="table-view">
        <Table/>
        </div>
    </div>
  );
}

export default App;
