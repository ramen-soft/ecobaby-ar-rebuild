import { createBrowserRouter } from 'react-router';
import App from './App';
import { ViewerPage } from './pages/ViewerPage';
import { TestPage } from './pages/TestPage';
import { AppLayout } from './AppLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: '/login',
				element: <p>login</p>,
			},
			{
				path: '/gallery',
				element: <p>gallery</p>,
			},
			{
				path: '/viewer/:modelId',
				element: <ViewerPage />,
			},
			{
				path: '/test',
				element: <TestPage />,
			},
		],
	},
]);
