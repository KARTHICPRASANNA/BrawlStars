import { React } from 'react';

const PowerCoins = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="powerCoin"
			src="/images/POWERCOINS.jpeg"
			alt="fs"
			width="50px"
			height="50px"
		/>
		<span className="powerCoinStyle">{brawlStar.powerCoins}</span>
	</div>;

export default PowerCoins;
