import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const Card = ({ props }) => {
	const {
		name,
		status,
		species,
		gender,
		image,
		handleFavorite,
		favorite,
	} = props;
	return (
		<div class="max-w-xs justify-self-center rounded overflow-hidden shadow-lg my-2 dark:bg-gray-600 bg-red-100">
			<img class="w-full" src={image} alt="Sunset in the mountains" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{name}</div>
				<p class="text-grey-darker text-base">Estado: {status}</p>
				<p class="text-grey-darker text-base">Especie: {species}</p>
				<p class="text-grey-darker text-base">Genero: {gender}</p>
			</div>

			<span
				class="inline-block bg-grey-lighter rounded-full text-xl font-semibold text-grey-darker"
				onClick={() => handleFavorite()}
			>
				{favorite ? <FaHeart /> : <FaRegHeart />}
			</span>
		</div>
	);
};

export default Card;
