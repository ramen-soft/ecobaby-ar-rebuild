import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ARAnchor, ARProvider } from 'r3f-mind-ar';
import { EcoModel } from './EcoModel';

export const ARViewer = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Canvas camera={{ position: [0, 0, 10] }}>
				<color attach="background" args={['black']} />
				<pointLight position={[10, 10, 10]} intensity={1} />
				<ambientLight intensity={0.2} />
				<ARProvider imageTargets="/markers/eco4.mind">
					<ARAnchor target={0}>
						<EcoModel />
						<OrbitControls />
					</ARAnchor>
				</ARProvider>
				<directionalLight position={[10, 10, 10]} color="white" intensity={0.5} />
			</Canvas>
		</div>
	);
};
