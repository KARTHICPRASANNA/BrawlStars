import { React, useState } from 'react';
import './App.scss';
import characters from './data/characters';
import BrawlStars from './components/BrawlStars';
import Title from './components/Title';
import Button from './components/Button';

const getInitialState = () => ({
	brawlStars: characters,
	indexValue: 1,
	sortMode: 'Least Trophies',
	brawler: {
		name: 'BARLEY',
		power: 3,
		rarity: 'common',
		powerCoins: 20,
		brawlCoins: 40,
		trophies: 30,
		rank: 5,
		image: '/images/BARLEY.png',
	},
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Title { ...extendedContext }/>
		<BrawlStars { ...extendedContext }/>
		<Button { ...extendedContext }/>
	</div>;
};

export default App;
