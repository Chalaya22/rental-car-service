import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';

const Home = lazy(() => import('../page/Home/Home.jsx'));
const Catalog = lazy(() => import('../page/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../page/Favorites/Favorites.jsx'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
