import { React } from 'react';

const Trophy = ({ data: { brawlStar }}) =>
	<div className="trophyStyle">
		<div
			className="bar"
			style={ {
				width: `${ brawlStar.trophies }px`,
			} }
		/>
		<img
			className="trophyImage"
			src="/images/TROPHY.png"
			alt="fs"
			width="30px"
			height="30px"
		/>
		<span className="trophy">{ brawlStar.trophies }</span>
	</div>;

export default Trophy;
