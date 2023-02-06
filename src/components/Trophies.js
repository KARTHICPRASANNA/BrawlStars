import { React } from 'react';

const Trophies = ({ data: { brawlStar }}) =>
	<div className="trophy">
		<img
			src="/images/TROPHY.jpeg"
			alt="fs"
			width="30px"
			height="30px"
		/>
		<label className="trophyStyle">{ brawlStar.trophies }</label>
	</div>;

export default Trophies;
