import { React } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const BrawlerTable = (context) => {
	const { state: { brawlStars }} = context;

	return <div>
		<h1 className="titleStyle">BRAWLERSTARS</h1>
		<table className="tableStyle">
			<TableHeader { ...context }/>
			{brawlStars.map((brawlStar, key) =>
				<TableBody
					key={ key }
					{ ...{ ...context,
						data: brawlStar } }
				/>)}
		</table>
	</div>;
};

export default BrawlerTable;
