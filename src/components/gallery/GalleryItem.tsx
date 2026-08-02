import type { Study } from '../../providers/SessionProvider';
import styles from './GalleryItem.module.css';

export const GalleryItem = ({ study }: { study: Study }) => {
	return (
		<article className={styles['gallery-item']}>
			<img src={`thumbs/${study.thumbnail}`} width="96" title={study.name} />
			<div className={styles['study-info']}>
				<strong>{study.name}</strong>
				<small className={styles['date']}>{study.date}</small>
				<span className={`${styles.badge} pink-main mb-2`}>{study.type}</span>
			</div>
		</article>
	);
};
