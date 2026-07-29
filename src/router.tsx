import { createBrowserRouter } from 'react-router';
import App from './App';
import { ViewerPage } from './pages/ViewerPage';
import { TestPage } from './pages/TestPage';
import { AppLayout } from './AppLayout';
import { GalleryPage } from './pages/GalleryPage';

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
				path: '/gallery',
				element: <GalleryPage />,
			},
			{
				path: '/viewer/:modelId',
				element: <ViewerPage />,
			},
			{
				path: '/test',
				element: <TestPage />,
			},
			{
				path: '*',
				element: <p>Pagina no encontrada</p>,
			},
		],
	},
]);
