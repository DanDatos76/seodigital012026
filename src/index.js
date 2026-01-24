 import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'; // <--- Se agrega la configuración de i18next
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento, pasa una función
reportWebVitals();
