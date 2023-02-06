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
		<label className="rankStyle">{ brawlStar.rank }</label>
	</div>;

export default Rank;
