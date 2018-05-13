import React from 'react';
import ReactDOM from 'react-dom';
import './_Demo/index.css';
import App from './_Demo/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
