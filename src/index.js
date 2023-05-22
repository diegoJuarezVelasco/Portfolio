import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from "react-ga4";
import {BrowserRouter as Router} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactGA.initialize("G-ZS2MCDCDMT");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
