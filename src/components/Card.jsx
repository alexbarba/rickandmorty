import React from 'react';

const Card = ({ props }) => {
	const { name, status, species, gender, image } = props;
	return (
		<div class="max-w-xs justify-self-center rounded overflow-hidden shadow-lg my-2 dark:bg-gray-600 bg-red-100">
			<img class="w-full" src={image} alt="Sunset in the mountains" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{name}</div>
				<p class="text-grey-darker text-base">Estado: {status}</p>
				<p class="text-grey-darker text-base">Especie: {species}</p>
				<p class="text-grey-darker text-base">Genero: {gender}</p>
			</div>

			<div class="px-6 py-4">
				<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
					# {status}
				</span>
				<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
					# {species}{' '}
				</span>
				<span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
					# {gender}{' '}
				</span>
			</div>
		</div>
	);
};

export default Card;
