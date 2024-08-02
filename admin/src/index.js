import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import router from './router';
import { Toaster } from 'sonner'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Toaster theme='light' richColors />
    <RouterProvider router={router} />
  </Provider>
);
