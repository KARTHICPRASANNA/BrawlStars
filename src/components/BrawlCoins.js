import { React } from 'react';

const BrawlCoins = ({ data: { brawlStar }}) =>
	<div>
		<img
			className="brawlCoin"
			src="/images/BRAWLCOINS.jpeg"
			alt="fs"
			width="50px"
			height="50px"
		/>
		<label className="brawlCoinStyle">{brawlStar.brawlCoins}</label>
	</div>;

export default BrawlCoins;
