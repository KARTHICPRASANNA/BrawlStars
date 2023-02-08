import { React } from 'react';

const CharacterImage = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="bgImage"
			src={ brawlStar.image }
			alt="fs"
			width="80%"
			height="80%"
		/>
	</div>;

export default CharacterImage;
