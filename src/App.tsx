import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/footer.tsx";
import BatJournal from "./components/BatJournal/BatJournal.tsx";
function App() {
	return (
		<>
			<NavBar />
			<BatJournal />
			<Footer />
		</>
	);
}

export default App;
