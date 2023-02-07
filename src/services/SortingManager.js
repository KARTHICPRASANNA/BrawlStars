/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
	}));

const sortByLeastTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => a.trophies - b.trophies);

const sortByMostTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.trophies - a.trophies);

const sortByPowerLevel = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.power - a.power);

const sortByRarity = ({ state: { brawlStars }, config: { rarityLevel }}) =>
	brawlStars.sort((a, b) => rarityLevel[a.rarity] - rarityLevel[b.rarity]);

const sortByRarityDescending = ({ state: { brawlStars },
	config: { rarityLevel }}) =>
	brawlStars.sort((a, b) => rarityLevel[b.rarity] - rarityLevel[a.rarity]);

const sortByClosestToNextRank = ({ state: { brawlStars },
	config: { rankTrophies }}) => brawlStars.sort((a, b) =>
	(rankTrophies[a.rank] - a.trophies)
		- (rankTrophies[b.rank] - b.trophies));

const SortingManager = {
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByPowerLevel,
	sortByRarity,
	sortByRarityDescending,
	sortByClosestToNextRank,
	getCharacters,
};

export default SortingManager;
