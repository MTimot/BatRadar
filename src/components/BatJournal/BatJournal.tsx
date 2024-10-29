import "./BatJournal.css";
import { useState } from "react";

const journal = ["cher journal", "blablablabla", "TESTESTEST"];
function BatJournal() {
	const [journalIndex, setJournalIndex] = useState(0);
	const handlePrevious = () => {
		setJournalIndex(journalIndex - 1);
	};
	const handleNext = () => {
		setJournalIndex(journalIndex + 1);
	};

	return (
		<>
			<div>
				<video
					className="videojournal"
					src="mymelody.mp4"
					autoPlay
					muted
					loop
					id="batvid"
				/>
				<div className="batjournal">
					<p>{journal[journalIndex]}</p>
					{journalIndex > 0 ? (
						<button type="button" onClick={handlePrevious}>
							Jour précédent
						</button>
					) : (
						<button type="button" disabled>
							Jour précédent
						</button>
					)}
					{journalIndex < journal.length - 1 ? (
						<button type="button" onClick={handleNext}>
							Jour suivant
						</button>
					) : (
						<button type="button" disabled>
							Jour suivant
						</button>
					)}
				</div>
			</div>
		</>
	);
}
export default BatJournal;
