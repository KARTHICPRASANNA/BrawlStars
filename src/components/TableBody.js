import React from 'react';

const TableBody = (context) => {
	const { config: { headers }, data: brawlStar } = context;

	return <tr className="columnStyle">
		{headers.map((header, key) =>
			<td key={ key } className="columnStyle">{brawlStar[header]}</td>)}
	</tr>;
};

export default TableBody;
