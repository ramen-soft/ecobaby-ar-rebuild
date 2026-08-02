import { useParams } from 'react-router';
import { ARViewer } from '../components/ARViewer';
import { CameraButton } from '../components/CameraButton';

export const ViewerPage = () => {
	const { modelId } = useParams();

	return (
		<div className="flex-col h-dvh relative">
			<div className="absolute">{modelId && <ARViewer model={modelId} />}</div>
			<div className="w-dvw absolute bottom-2 h-20 flex justify-center items-center">
				<CameraButton
					onClick={() => {
						alert('Esta funcionalidad está en desarrollo');
					}}
				/>
			</div>
		</div>
	);
};
