import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './router.tsx';
import { SessionProvider } from './providers/SessionProvider.tsx';
import '@fontsource-variable/elms-sans';

createRoot(document.getElementById('root')!).render(
	<SessionProvider>
		<StrictMode>
			<RouterProvider router={router}></RouterProvider>
		</StrictMode>
	</SessionProvider>,
);
