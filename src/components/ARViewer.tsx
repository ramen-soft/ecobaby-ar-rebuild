import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARAnchor, ARProvider } from 'r3f-mind-ar';
import { EcoModel } from './EcoModel';

export const ARViewer = ({ model }: { model: string }) => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Canvas camera={{ position: [0, 0, 10] }}>
				<Environment preset="studio" />
				<color attach="background" args={['black']} />
				<pointLight position={[10, 10, 10]} intensity={1} />
				<ambientLight intensity={0.6} />
				<ARProvider imageTargets="/markers/eco6.mind">
					<ARAnchor target={0}>
						<EcoModel model={model} />
						<OrbitControls />
					</ARAnchor>
				</ARProvider>
				<directionalLight intensity={1} position={[4, 5, 3]} />
				<directionalLight intensity={0.35} position={[-3, 2, -2]} />
			</Canvas>
		</div>
	);
};
