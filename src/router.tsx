import { createBrowserRouter } from 'react-router';
import App from './App';

export const router = createBrowserRouter([
	{
		path: '/',
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
		element: <p>model</p>,
	},
]);
