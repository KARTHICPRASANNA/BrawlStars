const getLeastTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => a.trophies - b.trophies);

const getMostTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.trophies - a.trophies);

const getPowerLevel = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.power - a.power);

const getRarity = ({ state: { brawlStars }, config: { rarityLevel }}) =>
	brawlStars.sort((a, b) => rarityLevel[a.rarity] - rarityLevel[b.rarity]);

const getRarityDescending = ({ state: { brawlStars },
	config: { rarityLevel }}) =>
	brawlStars.sort((a, b) => rarityLevel[b.rarity] - rarityLevel[a.rarity]);

const closestToNextRank = ({ state: { brawlStars },
	config: { rankTrophies }}) => brawlStars.sort((a, b) =>
	(rankTrophies[a.rank] - a.trophies)
		- (rankTrophies[b.rank] - b.trophies));

const SortingManager = {
	getLeastTrophies,
	getMostTrophies,
	getPowerLevel,
	getRarity,
	getRarityDescending,
	closestToNextRank,
};

export default SortingManager;
