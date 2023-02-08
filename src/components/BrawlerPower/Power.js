import { React } from 'react';

const Power = ({ data: { brawlStar }}) =>
	<div>
		<label className="power"> POWER </label>
		<label className="powerStyle">{ brawlStar.power }</label>
	</div>;

export default Power;
