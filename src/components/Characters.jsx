import React, {
	useState,
	useReducer,
	useMemo,
	useRef,
	useCallback,
} from 'react';
import Card from './Card';
import SearchInput from './SearchInput';
import useCharacters from '../hooks/useCharacters';

const API = 'https://rickandmortyapi.com/api/character/';

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
	const characters = useCharacters(API);
	const [favorites, dispatchFavorites] = useReducer(
		favoriteReducer,
		initialState
	);
	const [search, setSearch] = useState('');
	const searchRef = useRef(null);

	const filteredUsers = useMemo(
		() =>
			characters.filter((user) => {
				return user.name.toLowerCase().includes(search.toLowerCase());
			}),
		[characters, search]
	);

	const handleFavorite = (favorite) =>
		dispatchFavorites({
			type: isFavorite(favorite) ? 'REMOVE_FROM_FAVORITES' : 'ADD_TO_FAVORITES',
			payload: favorite,
		});

	const handleSearch = useCallback(() => {
		setSearch(searchRef.current.value);
	}, []);

	const isFavorite = (character) => favorites.favorites.includes(character);

	return (
		<div>
			<div className="Search">
				<SearchInput
					props={{
						type: 'text',
						value: search,
						onChange: handleSearch,
						placeholder: 'Buscar',
						ref: searchRef,
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
							favorite: isFavorite(character),
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Characters;
