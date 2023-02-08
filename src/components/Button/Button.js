import { React } from 'react';
import SortingManager from '../../services/SortingManager';

const types = {
	'Least Trophies': (context) =>
		SortingManager.sortByLeastTrophies(context),
	'Most Trophies': (context) =>
		SortingManager.sortByMostTrophies(context),
	'Power Level': (context) =>
		SortingManager.sortByPowerLevel(context),
	'By Rarity': (context) =>
		SortingManager.sortByRarity(context),
	'By Rarity Descending': (context) =>
		SortingManager.sortByRarityDescending(context),
	'Closest To Next Rank': (context) =>
		SortingManager.sortByClosestToNextRank(context),
};

const Button = (context) => {
	const { state, setState, config: { sorting }} = context;
	const { indexValue, sortMode } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				indexValue: indexValue + 1,
				sortMode: sorting[indexValue % sorting.length],
				brawlStars: types[sortMode](context),
			}) }
		>
			{ sortMode }
		</button>
	);
};

export default Button;
