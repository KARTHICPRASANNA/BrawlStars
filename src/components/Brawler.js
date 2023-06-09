import { React } from 'react';

import CharacterImage from './BrawlerImage/CharacterImage';
import CharacterName from './BrawlerName/CharacterName';
import Footer from './BrawlerCoins';
import Power from './BrawlerPower/Power';
import Rank from './Rank/Rank';
import Trophy from './Trophy/Trophy';

const Brawler = (context) =>
	<div className="square">
		<CharacterImage { ...context }/>
		<CharacterName { ...context }/>
		<Footer { ...context }/>
		<Power { ...context }/>
		<Rank { ...context }/>
		<Trophy { ...context }/>
	</div>;

export default Brawler;
