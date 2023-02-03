import { React, useState } from 'react';
import './App.scss';
import BrawlerTable from './components/BrawlerTable';
import Button from './components/Button';
import characters from './data/characters';

const getInitialState = () => ({
	brawlStars: characters,
	indexValue: 1,
	sortMode: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlerTable { ...extendedContext }/>
		<Button { ...extendedContext }/>
	</div>;
};

export default App;
