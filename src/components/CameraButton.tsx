import { CameraIcon } from '@heroicons/react/24/outline';
import { type MouseEventHandler } from 'react';

export const CameraButton = ({ onClick }: { onClick: MouseEventHandler }) => {
	return (
		<button className="pink-main p-5 rounded-4xl" onClick={onClick}>
			<CameraIcon className="size-9 stroke-white stroke-2" />
		</button>
	);
};
