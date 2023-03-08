import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
	console.log(process.env.REACT_APP_IMDB_API_KEY);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
