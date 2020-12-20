import React from 'react';
import ThemeToggler from './ThemeToggler/';
const Header = () => {
	return (
		<div className="container mx-auto my-8">
			<h1 className="text-3xl">Ricky and Morty</h1>
			<ThemeToggler />
		</div>
	);
};

export default Header;
