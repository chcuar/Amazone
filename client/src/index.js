import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import DepartmentProvider from './providers/DepartmentProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <DepartmentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </DepartmentProvider>
  </AuthProvider>,
  document.getElementById('root')
);
