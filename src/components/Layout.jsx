import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
