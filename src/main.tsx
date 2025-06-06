import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layout/Menu/Layout';

const route = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Menu></Menu>
			},
			{
				path: '/cart',
				element: <Cart></Cart>
			}
		]
	},

	{
		path: '*',
		element: <Error></Error>
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={route} />
	</StrictMode>
);
