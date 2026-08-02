import { useGLTF } from '@react-three/drei';
import { useLayoutEffect } from 'react';
import * as THREE from 'three';

const fetalSkinMaterial = new THREE.MeshPhysicalMaterial({
	color: '#936e55',

	roughness: 0.85,
	metalness: 0,

	emissive: '#5e271a',
	emissiveIntensity: 0.04,

	sheen: 0.2,
	sheenColor: '#b2876e',

	clearcoat: 0.05,
});

export const EcoModel = ({ model }: { model: string }) => {
	// const { scene } = useGLTF('/models/model-optimized.gltf');
	const { scene } = useGLTF(`/models/${model}.gltf`);
	useLayoutEffect(() => {
		const box = new THREE.Box3().setFromObject(scene);
		const center = box.getCenter(new THREE.Vector3());

		scene.position.sub(center);
		scene.traverse((ch) => {
			if (ch instanceof THREE.Mesh) {
				console.log(ch);
				ch.material = fetalSkinMaterial;
			}
		});
	}, [scene]);
	return (
		<group rotation={[-0.2, 0, 0]} position={[0, 1, 0]}>
			<primitive
				object={scene}
				scale={0.01}
				material={
					new THREE.MeshBasicMaterial({
						color: new THREE.Color('hotpink'),
						transparent: true,
					})
				}
			/>
		</group>
	);
};
