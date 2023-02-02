/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const characters = [
	{
		name: 'SHELLY',
		power: rndBetween(1, 10),
		rarity: 'STARTING BRAWLER',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(1, 10),
		rank: 1,
	},
	{
		name: 'EL PRIMO',
		power: rndBetween(1, 10),
		rarity: 'RARE',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(0, 10),
		rank: 2,
	},
	{
		name: 'NITA',
		power: rndBetween(1, 10),
		rarity: 'RARE',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(1, 10),
		rank: 3,
	},
	{
		name: 'JESSIE',
		power: rndBetween(1, 10),
		rarity: 'SUPER RARE',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(1, 10),
		rank: 4,
	},
	{
		name: 'PENNY',
		power: rndBetween(1, 10),
		rarity: 'SUPER RARE',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(1, 10),
		rank: 5,
	},
	{
		name: 'BARLEY',
		power: rndBetween(1, 10),
		rarity: 'RARE',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: rndBetween(1, 10),
		rank: 6,
	},
];

export default characters;
