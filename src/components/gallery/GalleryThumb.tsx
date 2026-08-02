export const GalleryThumb = ({
	path,
	title,
	width = 96,
}: {
	path: string;
	title: string;
	width?: number;
}) => {
	return (
		<>
			<img src={path} alt={title} width={width} />
		</>
	);
};
