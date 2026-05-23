import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Works from "./pages/work/Works";

const App = () => {
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
