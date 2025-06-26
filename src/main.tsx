import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/Error';
import { Layout } from './layout/Layout/Layout';
import { Product } from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/api';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthLayout from './layout/Auth/AuthLayout';
import { RequireAuth } from './helpers/RequireAuth';
import { store } from './store/store';
import { Provider } from 'react-redux';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return {
            data: new Promise((resolve, reject) => {
              axios
                .get(`${PREFIX}/products/${params.id}`)
                .then((response) => resolve(response.data))
                .catch((err) => {
                  reject(err);
                });
            })
          };
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>
);

export default Menu;
