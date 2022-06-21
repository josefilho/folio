import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ErrorPage } from '../pages/Error';
import { Quasar } from '../pages/Quasar';
import { SignUp } from '../pages/Quasar/SignUp';
import { UnderConstruction } from '../pages/UnderConstruction';

const MainRoutes: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/design' element={<UnderConstruction />} />
    <Route path='/apps' element={<UnderConstruction />} />
    <Route path='/college' element={<UnderConstruction />} />

    <Route path='/quasar' element={<Quasar />} />
    <Route path='/quasar/signup' element={<SignUp />} />

    <Route path='/*' element={<ErrorPage />} />
  </Routes>
);

export default MainRoutes;
