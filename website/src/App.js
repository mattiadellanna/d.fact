import { Routes, Route } from "react-router-dom";
import Web from './routes/web.js';
import Header from './components/header.js';

function App() {
  	return (
		<>
			<Header />

			<Routes>
				{Web.map((route, index) => (
					<Route key={ index } path={ route.path } element={ <route.component /> } />
				))}
			</Routes>
		</>
  	);
}

export default App;