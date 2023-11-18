import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { ErrorPage } from './pages/ErrorPage';
import './global.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => <Outlet />

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
]);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
