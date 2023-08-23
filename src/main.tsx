import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode, Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Kaleidoscope from './pages/Kaleidoscope/Kaleidoscope';
import Layout from './pages/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Memory from './pages/Memory/Memory';
import MemoryMap from './pages/Map/MemoryMap';

const router = createBrowserRouter([
  {
    path: '/kaleidoscope',
    element: (
      <Layout>
        <Kaleidoscope />
      </Layout>
    ),
  },
  {
    path: '/memory/:id',
    element: (
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Memory />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/map',
    element: (
      <Layout>
        <MemoryMap />
      </Layout>
    ),
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
