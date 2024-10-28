import "./cards.css";

function Cards({ vilains }) {
        return (
		<>
			<section className="container">
				{vilains.map((bad) => (
					<div key={bad.name} className="cards">
						<h2 className="titleName"> Nom : {bad.name}</h2>
						<img src={bad.image} alt="Image méchant" className="imgCards" />
						<p className="atout"> Atout : {bad.atout} </p>
					</div>
				))}
			</section>
		</>
	);
}

export default Cards;
