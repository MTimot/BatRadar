import "./navbar.css";
function NavBar() {
	return (
		<>
			<h1> Bat-Radar</h1>
			<div className="batlogocontainer">
				<img
					className="batlogo"
					src="https://i.pinimg.com/originals/91/53/93/9153939d7544582c1fd8c692b626958d.png"
					alt="logo de batman"
				/>
			</div>
			<nav>
				<ul className="batul">
					<li>Bat-radar</li>
					<li> Bat-contact</li>
					<li> Bat-journal intime</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
