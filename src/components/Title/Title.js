import { React } from 'react';

const Title = ({ state: { brawlStars }}) =>
	<h1 className="title">
		BRAWLERS { brawlStars.length }/64
	</h1>;

export default Title;
