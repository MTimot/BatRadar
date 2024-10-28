import "./BatJournal.css";
function BatJournal() {
	return (
		<>
			<div>
				<video
					className="videojournal"
					src="mymelody.mp4"
					autoPlay
					muted
					loop
				/>
				<div className="batjournal">
					<p>
						Cher batjournal, <br />
						aujourd'hui j'ai fondé mon premier kebab <br />
						je vends aussi des tacos <br />
						bisous.
					</p>
				</div>
			</div>
		</>
	);
}
export default BatJournal;
