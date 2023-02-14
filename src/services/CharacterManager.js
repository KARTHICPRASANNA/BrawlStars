/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
	}));

const CharacterManager = {
	getCharacters,
};

export default CharacterManager;
