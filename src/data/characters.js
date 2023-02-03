/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const characters = [
	{
		name: 'SHELLY',
		power: rndBetween(1, 10),
		rarity: 'common',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 33,
		rank: 5,
	},
	{
		name: 'EL PRIMO',
		power: rndBetween(1, 10),
		rarity: 'rare',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 55,
		rank: 6,
	},
	{
		name: 'NITA',
		power: rndBetween(1, 10),
		rarity: 'superRare',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 78,
		rank: 7,
	},
	{
		name: 'JESSIE',
		power: rndBetween(1, 10),
		rarity: 'legendary',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 100,
		rank: 9,
	},
	{
		name: 'PENNY',
		power: rndBetween(1, 10),
		rarity: 'epic',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 143,
		rank: 11,
	},
	{
		name: 'BARLEY',
		power: rndBetween(1, 10),
		rarity: 'mythic',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 175,
		rank: 12,
	},
];

export default characters;
