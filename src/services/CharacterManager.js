/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
	}));

const getSquare = (context) => {
	const { data: { key },
		config: { squareTopMultiplier, squareTopMargin,
			squareLeftMultiplier, squareLeftMargin }} = context;

	return {
		top: (Math.floor(key / 3) * squareTopMultiplier)
		+ squareTopMargin,
		left: ((key % 3) * squareLeftMultiplier) + squareLeftMargin,
		width: 300,
		height: 200,
	};
};

const CharacterManager = {
	getCharacters,
	getSquare,
};

export default CharacterManager;
