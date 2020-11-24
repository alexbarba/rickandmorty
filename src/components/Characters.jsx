import React, { useState, useEffect, useReducer } from 'react';
import Card from './Card';

const initialState = {
	favorites: [],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITES':
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case 'REMOVE_FROM_FAVORITES':
			return {
				...state,
				favorites: [
					...state.favorites.filter((favorite) => favorite !== action.payload),
				],
			};
		default:
			return state;
	}
};

const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [favorites, dispatchFavorites] = useReducer(
		favoriteReducer,
		initialState
	);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	const handleFavorite = (favorite) =>
		dispatchFavorites({
			type: !!findCharacterInFavorites(favorite)
				? 'REMOVE_FROM_FAVORITES'
				: 'ADD_TO_FAVORITES',
			payload: favorite,
		});

	const findCharacterInFavorites = (favorite) =>
		favorites.favorites.find((character) => character.id === favorite.id);

	console.log(favorites);
	return (
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{characters.map((character) => (
				<Card
					props={{
						...character,
						handleFavorite: () => handleFavorite(character),
						favorite: !!findCharacterInFavorites(character),
					}}
				/>
			))}
		</div>
	);
};

export default Characters;
