import { React } from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';
import Symbol from './Symbol';

const Rectangle = (context) =>
	<div className="rectangle">
		<PowerCoins { ...context }/>
		<Symbol/>
		<BrawlCoins { ...context }/>
	</div>;

export default Rectangle;
