import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ErrorPage } from '../pages/Error';

const MainRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/*' element={<ErrorPage />} />
  </Routes>
);

export default MainRoutes;
