import { React } from 'react';

const CharacterName = ({ data: { brawlStar }}) =>
	<div className="name">
		{brawlStar.name}
	</div>;

export default CharacterName;
