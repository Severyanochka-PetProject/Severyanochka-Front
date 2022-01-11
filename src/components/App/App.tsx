import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <HomePage/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
