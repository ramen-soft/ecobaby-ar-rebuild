import styles from './Gallery.module.css';
import type { ReactNode } from 'react';

export const Gallery = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<div className={styles.gallery}>{children}</div>
		</>
	);
};
