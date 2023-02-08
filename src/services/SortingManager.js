/* eslint-disable no-magic-numbers */
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
};

export default SortingManager;
