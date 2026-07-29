import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ARAnchor, ARProvider } from 'r3f-mind-ar';

const TestScene = ({ children }: { children: React.ReactNode }) => {
	useFrame(() => {});

	return <>{children}</>;
};

export const TestPage = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
				<ARProvider imageTargets="markers/targets.mind">
					<ARAnchor target={0}>
						<TestScene>
							<color attach="background" args={['black']} />
							<pointLight position={[10, 10, 10]} intensity={1} />
							<ambientLight intensity={0.2} />
							<mesh>
								<sphereGeometry />
								<meshStandardMaterial color="hotpink" />
							</mesh>

							<directionalLight
								position={[10, 10, 10]}
								color="white"
								intensity={0.5}
							/>

							<OrbitControls />
						</TestScene>
					</ARAnchor>
				</ARProvider>
			</Canvas>
		</div>
	);
};
