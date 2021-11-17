import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Array } from './components/Array';
import Table from './components/Table';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Array/>
    <Table/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
