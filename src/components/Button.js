import { React } from 'react';
import SortingManager from '../services/SortingManager';

const types = {
	LeastTrophies: (context) =>
		SortingManager.getLeastTrophies(context),
	MostTrophies: (context) =>
		SortingManager.getMostTrophies(context),
	PowerLevel: (context) =>
		SortingManager.getPowerLevel(context),
	ByRarity: (context) =>
		SortingManager.getRarity(context),
	ByRarityDescending: (context) =>
		SortingManager.getRarityDescending(context),
	ClosestToNextRank: (context) =>
		SortingManager.closestToNextRank(context),
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
