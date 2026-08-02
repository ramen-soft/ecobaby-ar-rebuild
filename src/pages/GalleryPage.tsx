import { useEffect } from 'react';
import { useSession } from '../hooks/useSession';
import { Link, useNavigate } from 'react-router';
import { Gallery } from '../components/gallery/Gallery';
import { GalleryItem } from '../components/gallery/GalleryItem';

export const GalleryPage = () => {
	const { session, setSession } = useSession();
	const navigate = useNavigate();

	useEffect(() => {
		if (!session) {
			//navigate('/');
			setSession({
				patientId: 'amelia',
				patient: {
					id: 'amelia',
					name: 'Amelia',
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
	}, [session, setSession, navigate]);

	return (
		<div className="page">
			{session ? (
				<div className="flex flex-col h-screen">
					<div className="header px-4 flex-0">
						<h2 className="mt-4 text-3xl font-bold">Hola, {session.patient.name}</h2>
						<p className="mt-4 mb-1">Estas son tus ecografías</p>
					</div>
					<div className="flex-1 px-4">
						<Gallery>
							{session.studies.map((study, i) => (
								<Link key={i} to={`/viewer/${session.patientId}/${study.model}`}>
									<GalleryItem study={study}></GalleryItem>
								</Link>
							))}
						</Gallery>
					</div>
					<div className="flex-[0_1_auto] h-[64px] px-4 border-t border-gray-300"></div>
				</div>
			) : (
				<p>No se ha iniciado sesión...</p>
			)}
		</div>
	);
};
