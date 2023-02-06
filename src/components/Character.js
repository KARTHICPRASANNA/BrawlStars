/* eslint-disable no-magic-numbers */
import { React } from 'react';
import BackgroundImage from './BackgroundImage';
import CharacterName from './CharacterName';
import Power from './Power';
import Rank from './Rank';
import Rectangle from './Rectangle';
import Trophies from './Trophies';

const squareMultiplier = 320;
const squareMargin = 100;
const style = (context) => {
	const { data: { key }, config: { size }} = context;

	return {
		top: 145 * size,
		left: ((key * squareMultiplier) + squareMargin) * size,
		width: 300 * size,
		height: 200 * size,
	};
};

const Character = (context) =>
	<div
		className="square"
		style={ style(context) }
	>
		<BackgroundImage { ...context }/>
		<CharacterName { ...context }/>
		<Rectangle { ...context }/>
		<Power { ...context }/>
		<Rank { ...context }/>
		<Trophies { ...context }/>
	</div>;

export default Character;
