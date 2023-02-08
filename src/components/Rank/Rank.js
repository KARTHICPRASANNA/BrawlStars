import { React } from 'react';

const Rank = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="hexagon"
			src="/images/HEXAGON.png"
			alt="fs"
			width="60px"
			height="50px"
		/>
		<span className="rankStyle">{ brawlStar.rank }</span>
	</div>;

export default Rank;
