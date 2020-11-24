import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';

function App() {
	return (
		<div className="dark:bg-gray-800 dark:text-gray-50">
			<div className="container mx-auto flex flex-col text-center ">
				<Header />
				<Characters />
			</div>
		</div>
	);
}

export default App;
