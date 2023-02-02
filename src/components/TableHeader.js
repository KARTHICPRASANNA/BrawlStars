import { React } from 'react';

const TableHeader = (context) => {
	const { config: { headers }} = context;

	return headers.map((header, key) =>
		<th key={ key } className="headerStyle">{header}</th>);
};

export default TableHeader;
