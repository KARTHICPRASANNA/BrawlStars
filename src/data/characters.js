/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const characters = [
	{
		name: 'BARLEY',
		power: rndBetween(1, 10),
		rarity: 'common',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 33,
		rank: 5,
		image: '/images/BARLEY.png',
	},
	{
		name: 'EL PRIMO',
		power: rndBetween(1, 10),
		rarity: 'rare',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 55,
		rank: 6,
		image: '/images/EL PRIMO.png',
	},
	{
		name: 'BROCK',
		power: rndBetween(1, 10),
		rarity: 'superRare',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 78,
		rank: 7,
		image: '/images/BROCK.png',
	},
	{
		name: 'BO',
		power: rndBetween(1, 10),
		rarity: 'legendary',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 100,
		rank: 9,
		image: '/images/BO.png',
	},
	{
		name: 'COLT',
		power: rndBetween(1, 10),
		rarity: 'epic',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 143,
		rank: 11,
		image: '/images/COLT.png',
	},
	{
		name: 'TARA',
		power: rndBetween(1, 10),
		rarity: 'mythic',
		powerCoins: rndBetween(1, 10),
		brawlCoins: rndBetween(1, 10),
		trophies: 175,
		rank: 12,
		image: '/images/TARA.png',
	},
];

export default characters;
