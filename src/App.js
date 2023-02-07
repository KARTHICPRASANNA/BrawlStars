import { React, useState } from 'react';
import './App.scss';
import BrawlStars from './components/BrawlStars';
import Title from './components/Title';
import Button from './components/Button';
import SortingManager from './services/SortingManager';

const getInitialState = (context) => ({
	brawlStars: SortingManager.getCharacters(context),
	indexValue: 1,
	sortMode: 'Least Trophies',
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
