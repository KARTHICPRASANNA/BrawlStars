import './App.scss';
import { React, useState } from 'react';

import CharacterManager from './services/CharacterManager';
import Title from './components/Title/Title';
import Container from './components/Container';
import Button from './components/Button/Button';

const getInitialState = (context) => ({
	brawlStars: CharacterManager.getCharacters(context),
	indexValue: 1,
	sortMode: 'Least Trophies',
	powerUp: false,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };
	const { once } = context;

	once(() => CharacterManager.getUpdatedPowerUp(extendedContext));

	return <div className="App">
		<Title { ...extendedContext }/>
		<Button { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</div>;
};

export default App;
