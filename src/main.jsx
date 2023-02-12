import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const app = (
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    app
  // </React.StrictMode>
);
