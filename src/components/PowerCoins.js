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
		<label className="powerCoinStyle">{brawlStar.powerCoins}</label>
	</div>;

export default PowerCoins;
