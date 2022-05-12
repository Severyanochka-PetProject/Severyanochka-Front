import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Provider } from "react-redux";
import store from "./store/index.js";

import '../src/scss/fonts/fonts.css';
import '../src/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/App/App';

ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
  document.getElementById('root')
);
