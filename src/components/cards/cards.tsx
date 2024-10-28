function Cards({vilains}) {
    
	return <>{vilains.map((bad) => (
        <div>
        <h2 className="titleName"> Nom : {bad.name}</h2>
        <img src={bad.image} alt="Image méchant" className="imgCards" />
        <p className="atout"> Atout : {bad.atout} </p>
        <p>blabla</p>
        </div>
))}
</>;
}

export default Cards;
