import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadClient, authenticate } from './utils';

window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "392596198474-5jsa6sv65j78pqjkgkr333pngdrd736v.apps.googleusercontent.com"});
  });
window.onGoogleScriptLoaded = () => { authenticate().then(loadClient) }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
