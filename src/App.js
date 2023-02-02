import { React, useState } from 'react';
import './App.scss';
import BrawlerTable from './components/BrawlerTable';
import characters from './data/characters';

const getInitialState = () => ({
	brawlStars: characters,
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlerTable { ...extendedContext }/>
	</div>;
};

export default App;
