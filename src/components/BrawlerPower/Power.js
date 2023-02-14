import { React } from 'react';

const Power = ({ state: { powerUp }, data: { brawlStar }}) =>
	<div>
		<span className="powerIcon">
			<img
				className={ powerUp ? 'powerTop' : 'powerBottom' }
				src="/images/POWERICON.jpeg"
				alt="fs"
				width="25%"
				height="25%"
			/>
		</span>
		<span className="power"> POWER </span>
		<span className="powerStyle">{ brawlStar.power }</span>
	</div>;

export default Power;
