import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Kaleidoscope from './pages/kaleidoscope';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Kaleidoscope />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
