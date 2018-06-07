import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeviceDetector from './components/DeviceDetector';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <DeviceDetector />,
    document.getElementById('root')
);
registerServiceWorker();
