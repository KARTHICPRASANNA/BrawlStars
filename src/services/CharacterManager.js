/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
	}));

const getUpdatedPowerUp = (context) => {
	const { setState } = context;

	return setInterval(() => setState((state) =>
		({
			...state,
			powerUp: !state.powerUp,
		})), 2000);
};

const CharacterManager = {
	getCharacters,
	getUpdatedPowerUp,
};

export default CharacterManager;
