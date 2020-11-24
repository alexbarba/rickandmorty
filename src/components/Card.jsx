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
		<div className="max-w-xs justify-self-center rounded overflow-hidden shadow-lg my-2 dark:bg-gray-600 bg-red-100">
			<img className="w-full" src={image} alt="Sunset in the mountains" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{name}</div>
				<p className="text-grey-darker text-base">Estado: {status}</p>
				<p className="text-grey-darker text-base">Especie: {species}</p>
				<p className="text-grey-darker text-base">Genero: {gender}</p>
			</div>

			<span
				className="inline-block bg-grey-lighter rounded-full text-xl font-semibold text-grey-darker"
				onClick={() => handleFavorite()}
			>
				{favorite ? <FaHeart /> : <FaRegHeart />}
			</span>
		</div>
	);
};

export default Card;
