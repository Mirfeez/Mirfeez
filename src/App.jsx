import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Works from "./pages/work/Works";
import { useEffect } from "react";

const App = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
	}, [pathname]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/works" element={<Works />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/*" element={<Notfound />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
