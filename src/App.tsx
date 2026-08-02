import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useSession } from './hooks/useSession';
import './App.css';

const App = () => {
	const [params] = useSearchParams();
	const navigate = useNavigate();
	const { session, setSession } = useSession();

	useEffect(() => {
		const { user } = Object.fromEntries([...params]);
		if (user && user.length) {
			setSession({
				patientId: user,
				patient: {
					id: 'pepe',
					name: 'Romualda',
				},
				studies: [
					{
						type: '4d',
						thumbnail: 'th1.png',
						name: 'Semana 12',
						date: '9 octubre, 2016',
						model: 'bebe1_opt',
					},
					{
						type: '4d',
						thumbnail: 'th2.png',
						name: 'Semana 15',
						date: '27 octubre, 2016',
						model: 'model-optimized',
					},
					{
						type: '4d',
						thumbnail: 'th3.png',
						name: 'Semana 18',
						date: '13 noviembre, 2016',
						model: 'bebe1_opt',
					},
				],
			});
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
