import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import HomePage from './pages/home-page';

const r = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={r}></RouterProvider>
  </React.StrictMode>
);
