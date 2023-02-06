import { React } from 'react';

const BackgroundImage = ({ data: { brawlStar }}) =>
	<div className="bgImage">
		<img
			src={ brawlStar.image }
			alt="fs"
			width="175px"
			height="175px"
		/>
	</div>;

export default BackgroundImage;
