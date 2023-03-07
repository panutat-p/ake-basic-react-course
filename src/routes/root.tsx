import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home-page';
import AboutPage from '../pages/about-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/about',
    element: <AboutPage></AboutPage>,
  },
]);

export default router;
