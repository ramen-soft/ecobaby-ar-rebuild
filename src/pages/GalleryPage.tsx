import { useEffect } from 'react';
import { useSession } from '../hooks/useSession';
import { useNavigate } from 'react-router';

export const GalleryPage = () => {
	const { session } = useSession();
	const navigate = useNavigate();

	useEffect(() => {
		if (!session) navigate('/');
	}, [session, navigate]);

	return <div>{JSON.stringify(session)}</div>;
};
