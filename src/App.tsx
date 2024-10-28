import "./App.css";
import Cards from "./components/cards/cards";
	const vilains = [  
		{
			name : "Joker",
		   image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifoyuM5EaOY_bJHgwnQC8Coqh61E5_Ra78A&s",
		   atout : "Fou"
		},
		{
			name : "Harley Quinn",
			image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUJa7a7U1qJy8GtQjS6JAAxCIbJHha5E5yA&sq",
			atout : "Folle amoureuse du Joker"
		},
		{
			name : "Le Pingouin",
			image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeryOY5nmn3--dJEpJ9BVf_5qA_uTskuQl2A&s",
			atout : "L'habit ne fait pas le moine"
		},
		{
			name : "Poison Ivy",
			image : "https://people.com/thmb/9Z_3IN0WyDnpDtLOUN3zsIH3zbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x399:751x401)/uma-thurman-batman-robin-1-0c7260cbc52a44f1837ae1578f37c1bd.jpg",
			atout : "Poison botanique"
		},
		{
			name : "Mr Freezer",
			image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3IP1UcBMQjnmzV3IUnfz_9sTD1dU-hrubQ&s",
			atout : "Congélateur ambulant"
		},
		{
			name : "Bane",
			image : "https://www.radiofrance.fr/s3/cruiser-production/2020/12/dee890b8-077e-4dbf-a9b2-7ce26fbcd6ef/1200x680_tom.jpg",
			atout : "Monsieur muscle"
		},
		{
			name : "L'Epouventail",
			image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOulWaEZSSyBjh5uFg86lPi9OwIjy4prmA6Q&s",
			atout : "Substances hallucinogènes"
		},
		{
			name : "L'homme mystère",
			image : "https://www.melty.fr/wp-content/uploads/meltyfr/2022/01/media-30301.jpg",
			atout : "Cadeau mystère"
		},
	]
	function App() {

		return ( 
		<>
		<Cards vilains={vilains} />

	</>
	);
}

export default App;
