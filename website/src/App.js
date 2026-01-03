import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Web from './routes/web.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Engage from "./components/engage.js";

function App() {
	const location = useLocation();
	const isContactPage = location.pathname === "/contacts";

	useEffect(() => {
		window.scrollTo(0, 0);	
	}, [location.pathname]);

	return (
		<>
			<Header />

			<Routes>
				{Web.map((route, index) => (
					<Route key={ index } path={ route.path } element={ <route.component /> } />
				))}
			</Routes>
			
			{!isContactPage && <Engage />}

			<Footer />
		</>
	);
}

export default App;