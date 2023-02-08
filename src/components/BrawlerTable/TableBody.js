import React from 'react';

const displayImage = (path) =>
	<img
		src={ path }
		alt="fs"
		width="100px"
		height="100px"
	/>;

const TableBody = (context) => {
	const { config: { headers },
		data: brawlStar } = context;

	return <tr className="columnStyle">
		{headers.map((header, key) =>
			<td key={ key } className="columnStyle">
				{brawlStar[header] === brawlStar.image
					? displayImage(brawlStar.image)
					: brawlStar[header] }
			</td>)}
	</tr>;
};

export default TableBody;
