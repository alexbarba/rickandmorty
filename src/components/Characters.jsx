import React, { useState, useEffect, useReducer, useMemo } from 'react';
import Card from './Card';
import SearchInput from './SearchInput';

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
	const [search, setSearch] = useState('');

	const filteredUsers = useMemo(
		() =>
			characters.filter((user) => {
				return user.name.toLowerCase().includes(search.toLowerCase());
			}),
		[characters, search]
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
	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	const findCharacterInFavorites = (favorite) =>
		favorites.favorites.find((character) => character.id === favorite.id);

	return (
		<div>
			<div className="Search">
				<SearchInput
					props={{
						type: 'text',
						value: search,
						onChange: (e) => handleSearch(e),
						placeholder: 'Buscar',
					}}
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{filteredUsers.map((character) => (
					<Card
						key={character.id}
						props={{
							...character,
							handleFavorite: () => handleFavorite(character),
							favorite: !!findCharacterInFavorites(character),
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Characters;
