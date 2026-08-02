import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import * as THREE from 'three';

export const EcoModel = () => {
	const { scene } = useGLTF('/models/model-optimized.gltf');
	useLayoutEffect(() => {
		const box = new THREE.Box3().setFromObject(scene);
		const center = box.getCenter(new THREE.Vector3());
		scene.position.sub(center);
	}, [scene]);
	return <primitive object={scene} scale={0.01} rotation={[0.3, -0.6, Math.PI / 2]} />;
};
