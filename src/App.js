import React from 'react';
import logo from './logo.svg';
import './App.css';

import ParentComp from './childProps/ParentComp';
import ChildComp from './childProps/ChildComp';

function App() {
  return (
    <div className="App">
      <ParentComp>
        <ChildComp />
      </ParentComp>
    </div>
  );
}

export default App;
