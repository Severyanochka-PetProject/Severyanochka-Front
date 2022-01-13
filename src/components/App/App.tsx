import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';
import HomePage from "../../pages/HomePage/HomePage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";

function App() {
    const [modalOpen, toggleModal] = useState(true)

  return (
    <div className="app">
        <ModalWrapper active={modalOpen} toggleModal={toggleModal} />
        <Routes>
            <Route path="/" element={
                <HomePage/>
            }/>
        </Routes>
    </div>
  );
}

export default App;
