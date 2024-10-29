import "./BatJournal.css";
import { useState } from "react";

const journal = [
	{
		date: "19 septembre",
		contenu:
			"Cette nuit Gotham city était très calme, TROP calme... Je m'ennuyais. Jusqu'à ce que je réalise que cela signifiait que je n'avais aucune responsabilité pour la nuit. Je me sens enfermé dans cette routine justicière. Je ne le fais plus parce que je veux faire régner la justice mais parce que je le DOIS... J'ai donc profité de cette nuit pour enfin me plonger dans une réelle passion. J'ai ouvert un kébab.",
	},
	{
		date: "20 septembre",
		contenu:
			"Ce soir n’a pas été facile, Joker et Harley ont encore fait des leurs... Ils ont gagné la bataille, mais je ne m’avoue pas vaincu. La prochaine fois ça sera la bonne. J’y crois !!!!! Allez je file, je dois aller ouvrir le kebab des clients attendent déjà. Bisous",
	},
	{
		date: "21 septembre",
		contenu:
			"Heureusement ce soir la ville est de nouveau paisible. Parlons kebab. Mon nouveau restaurant, le batmankebab tourne bien ! Mais pour toucher plus de clients, il me fallait un site web... J'ai donc décidé de passer ma nuit à apprendre le html/css. En apprenant le html je me suis innocemment dit que la création de site web n'était pas si compliquée. Cependant, le css m'a donné du fil à retordre. Le joker est-il dans le coup ? Pourquoi rien ne fonctionne comme je le souhaite ? Rien n'a de sens... J'essaie juste de rétrécir une image, pourquoi est-ce aussi difficile ??.. Je vais aller me coucher.",
	},
	{
		date: "22 septembre",
		contenu:
			"TANT PIS POUR LE CRIME. Je suis investi dans ma nouvelle passion, j'ai bien le droit d'avoir un peu de temps libre aussi ! J'ai réussi à faire ma première grid tout à l'heure. Alfred a développé un exercice avec des carottes à arroser et ça m'a bien aidé. Je pense que je vais pouvoir commencer le développement de mon site.",
	},
	{
		date: "23 septembre",
		contenu:
			"J'ai demandé à Alfred de me trouver le meilleur graphiste du marché. J'ai investi un MILLIARD dans un logo pour mon site. Pour moi, il faut gagner l'attention et le coeur du client dès le premier coup d'oeil, cet investissement sera bien plus que rentabalisé par les clients qui accoureront par CENTAINE pour venir manger un batkébab.",
	},
	{
		date: "24 septembre",
		contenu:
			"LE SITE EST FINI ! Mais j'ai déjà un problème.. Un dilemme moral.. Une commande au nom 'l'homme mystère'... Je ne sais que faire, il est un des criminels les plus dangereux de Gotham, mais d'un autre côté ici il n'est qu'un client désireux de rassasir sa faim via un délicieux batkébab. Il serait injuste de ne pas honorer sa commande. Je suis la JUSTICE. C'est décidé, l'homme mystére aura son kébab et il va se RÉGALER.",
	},
	{
		date: "25 septembre",
		contenu:
			"Je suis perdu. Aujourd'hui j'ai reçu une commande de groupe venant des super-vilains. Ils se sont tous réunis pour manger un batkébab. Est-ce vraiment possible ?.. Ou est-ce un piège qu'ils essaient de me tendre ? Non, impossible, ils n'auraient jamais pu découvrir que je suis la personne à la tête de ce kébab. Tout comme hier, il me faut honorer leur commande. Si je leur refuse une commande par conflit personnel, je ne vaudrais alors pas beaucoup plus qu'eux. J'ai des valeurs. En tant que chef kébabiste, chacun de mes clients doit être satisfait. ",
	},
	{
		date: "26 septembre",
		contenu:
			"Cette nuit ils ont encore commandé tous ensemble. Hier ils sont tous repartis avec un grand sourire, je leur ai découvert un nouveau visage. Ils ne sont peut-être pas si détestables.. Je reste tout de même prudent.",
	},
	{
		date: "27 septembre",
		contenu:
			"J'ai toujours du mal à y croire, mais ils recommencent à commander. Hier, avant de partir, ils sont venus un par un me dire à quel point mon kebab avait changer leurs vies. Ils m'ont dit qu'ils comptaient réfléchir à ouvrir une chaine de kebab tous ensemble... Font-ils cela pour me nuire ? Ou sont-ils réellement passionnés par le kébab ??",
	},
	{
		date: "13 octobre",
		contenu:
			"Je n'ai pas pu écrire pendant un certain temps tant mon restaurant a du succès. Les vilains n'ont pas commis de crimes depuis des semaines, mais ils se réunissent tous les soirs autour de mes kébabs. Nous sommes presque devenus amis... Je me demande comment ils réagiraient s'ils découvraient ma nouvelle identité.",
	},
	{
		date: "23 juin",
		contenu:
			"Je n'en reviens pas ! Aujourd'hui était mon anniversaire, et à leur habitude, les super-vilains (qui se sont reconvertis en supers-amis) ont commandé leur kébab du soir. Quelle ne fut pas ma stupéfaction lorsqu'ils sont tous venus en costume de Batman, chantant 'joyeux anniversaire Batman' puis affirmant 'Merci de nous avoir ouvert la voie du bien !'... Je.. C'est le plus beau jour de ma vie.",
	},
];
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
					<p>
						{" "}
						<br />
					</p>
					<p className="batdate">{journal[journalIndex].date}</p>
					<p> Cher Batjournal,</p>
					<p>{journal[journalIndex].contenu}</p>
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
