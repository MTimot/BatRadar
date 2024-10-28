import "./cards.css";


function Cards({ vilains }) {
	const handleChangeImg = (e, bad) => {
		if (bad.name === "Mr Freezer") {
			e.currentTarget.src =
				"https://www.valgourmand.com/36910-superlarge_default/mr-freeze-cool-pop-classic.jpg";
		}
	};

	return (
		<>
			<section className="container">
				{vilains.map((bad) => (
					<div key={bad.name} className="cards">
						<h2 className="titleName"> Nom : {bad.name}</h2>
						<img
							src={bad.image}
							alt="Image méchant"
							className="imgCards"
							onMouseEnter={(e) => {
								handleChangeImg(e, bad);
							}}
							onMouseLeave={(e) => {
								e.currentTarget.src = bad.image;
							}}
						/>
						<p className="atout"> Atout : {bad.atout} </p>
					</div>
				))}
			</section>
		</>
	);
}

// {changeImage ? (bad.name === "Mr Freezer") : (<img src="https://www.valgourmand.com/36910-superlarge_default/mr-freeze-cool-pop-classic.jpg" alt=" sskjkjk"
export default Cards;
