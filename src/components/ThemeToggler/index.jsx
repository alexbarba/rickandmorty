import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import ThemeContext from '../../context/ThemeContext';
import './styles.css';

const ThemeToggler = () => {
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	const handleClick = () => {
		setDarkMode(!darkMode);
	};

	return (
		<label>
			<Toggle
				defaultChecked={darkMode}
				checked={darkMode}
				icons={{
					checked: <img src="https://i.imgur.com/YXEVwX9.png" alt="c" />,
					unchecked: <img src="https://i.imgur.com/uuue881.png" alt="o" />,
				}}
				onChange={handleClick}
			/>
		</label>
	);
};

export default ThemeToggler;
