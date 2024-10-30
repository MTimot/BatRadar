import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/footer.tsx";
import BatJournal from "./components/BatJournal/BatJournal.tsx";
import Cards from "./components/cards/cards";
import Home from "./pages/Home.tsx";
import Journal from "./pages/Journal.tsx";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const vilains = [
	{
		name: "Joker",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifoyuM5EaOY_bJHgwnQC8Coqh61E5_Ra78A&s",
		atout: "Fou",
		id: 1,
	},
	{
		name: "Harley Quinn",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUJa7a7U1qJy8GtQjS6JAAxCIbJHha5E5yA&sq",
		atout: "Folle amoureuse du Joker",
		id: 2,
	},
	{
		name: "Le Pingouin",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeryOY5nmn3--dJEpJ9BVf_5qA_uTskuQl2A&s",
		atout: "L'habit ne fait pas le moine",
		id: 3,
	},
	{
		name: "Poison Ivy",
		image:
			"https://people.com/thmb/9Z_3IN0WyDnpDtLOUN3zsIH3zbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x399:751x401)/uma-thurman-batman-robin-1-0c7260cbc52a44f1837ae1578f37c1bd.jpg",
		atout: "Poison botanique",
		id: 4,
	},
	{
		name: "Mr Freeze",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3IP1UcBMQjnmzV3IUnfz_9sTD1dU-hrubQ&s",
		atout: "Congélateur ambulant",
		id: 5,
	},
	{
		name: "Bane",
		image:
			"https://www.radiofrance.fr/s3/cruiser-production/2020/12/dee890b8-077e-4dbf-a9b2-7ce26fbcd6ef/1200x680_tom.jpg",
		atout: "Monsieur muscle",
		id: 6,
	},
	{
		name: "L'Epouventail",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYUwO1tDAey6J0AEyF3-essRdOtOcwXadZQ&s",
		atout: "Substances hallucinogènes",
		id: 7,
	},
	{
		name: "L'homme mystère",
		image:
			"https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-30301.jpg",
		atout: "Cadeau mystère",
		id: 8,
	},
];
function App() {
	const [currentLocation, setCurrentLocation] = useState("/");
	return (
		<>
		<div>
        <Link to="/">Home</Link>
        <Link to="/Journal">Journal</Link>
      </div>

      <main>
		<Outlet />
	</main>

	  <NavBar />
	<Cards vilains={vilains} />
	<BatJournal />
	  <Footer />

		</>
	);
}

export default App;
