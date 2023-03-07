import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home-page';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
]);

export default router;
