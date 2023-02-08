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
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Title { ...extendedContext }/>
		<Container { ...extendedContext }/>
		<Button { ...extendedContext }/>
	</div>;
};

export default App;
