import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useSession } from './hooks/useSession';

const App = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const { session, setSession } = useSession();

	useEffect(() => {
		const { user } = Object.fromEntries([...params]);
		if (user && user.length) {
			setSession({ patientId: user, studies: ['ab', 'cbc'] });
		}
	}, [params, setSession]);

	useEffect(() => {
		if (!session) return () => {};
		if (session && session.studies.length > 0) {
			if (session.studies.length > 1) navigate(`/gallery`);
			else navigate(`/viewer/${session.studies[0]}`);
		} else {
			console.log('No hay ecografias disponibles.');
		}
	}, [session, navigate]);

	return (
		<>
			<h1>Ecobaby AR Rebuild</h1>
			{JSON.stringify(session)}
		</>
	);
};

export default App;
