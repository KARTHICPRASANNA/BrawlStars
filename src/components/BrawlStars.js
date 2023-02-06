import { React } from 'react';
import Character from './Character';

const BrawlStars = (context) => {
	const { state: { brawlStars }} = context;

	return <div>
		{ brawlStars.map((brawlStar, key) =>
			<Character
				key={ key }
				{ ...{ ...context,
					data: { brawlStar, key }} }
			/>)}
	</div>;
};

export default BrawlStars;
