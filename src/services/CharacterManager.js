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
		config: { size, squareTopMultiplier, squareTopMargin,
			squareLeftMultiplier, squareLeftMargin }} = context;

	return {
		top: ((Math.floor(key / 3) * squareTopMultiplier)
		+ squareTopMargin) * size,
		left: (((key % 3) * squareLeftMultiplier) + squareLeftMargin) * size,
		width: 300 * size,
		height: 200 * size,
	};
};

const CharacterManager = {
	getCharacters,
	getSquare,
};

export default CharacterManager;
