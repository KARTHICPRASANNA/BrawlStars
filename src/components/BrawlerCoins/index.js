import { React } from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';
import Operator from './Operator';

const Footer = (context) =>
	<div className="footer">
		<PowerCoins { ...context }/>
		<Operator/>
		<BrawlCoins { ...context }/>
	</div>;

export default Footer;
