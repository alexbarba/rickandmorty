import React, { useState, useEffect } from 'react';
import Card from './Card';

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	return (
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			{characters.map((character) => (
				<Card props={{ ...character }} />
			))}
		</div>
	);
};

export default Characters;
