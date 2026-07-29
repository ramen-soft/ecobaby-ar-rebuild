import { Outlet } from 'react-router';

export const AppLayout = () => {
	return (
		<div>
			<Outlet />
			<footer>&reg; 2026</footer>
		</div>
	);
};
