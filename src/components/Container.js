import { React } from 'react';
import Brawler from './Brawler';

const Container = (context) => {
	const { state: { brawlStars }} = context;

	return (
		<div>
			{ brawlStars.map((brawlStar, key) =>
				<Brawler
					key={ key }
					{ ...{ ...context, data: { brawlStar, key }} }
				/>)}
		</div>
	);
};

export default Container;
