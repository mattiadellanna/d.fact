import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Web from './routes/web.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Engage from "./components/engage.js";
import Generator from "./components/generator.js";

function App() {
	const location = useLocation();
	const isContactPage = location.pathname === "/contacts";
	const generatorRef = useRef(null);

	/* ===============================
     FAVICON
	=============================== */
	const setFavicon = (dataUrl) => {
		if (!dataUrl) return;

		localStorage.setItem("favicon", dataUrl);

		let link = document.querySelector("link[rel='icon']");
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.head.appendChild(link);
		}

		link.type = "image/png";
		link.href = dataUrl;
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		
		const cached = localStorage.getItem("favicon");
		if (cached) setFavicon(cached);

		if (!generatorRef.current) return;

		let attempts = 0;
		const maxAttempts = 10;

		const tryExport = () => {
		const png = generatorRef.current.exportPNG();

		if (png) {
			setFavicon(png);
			return;
		}

		attempts++;
		if (attempts < maxAttempts) {
			requestAnimationFrame(tryExport);
		}
  	};

  tryExport();

}, [location.pathname]);


	return (
		<>
			<div className="none">
				<Generator ref={generatorRef} size={32} id="favicon"/>
			</div>

			<Header />

			<Routes>
				{Web.map((route, index) => (
					<Route key={ index } path={ route.path } element={ <route.component /> } />
				))}
			</Routes>
			
			{!isContactPage && <Engage />}
			
			<Footer/>
		</>
	);
}

export default App;