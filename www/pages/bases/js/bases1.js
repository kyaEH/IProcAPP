Swal.fire({
  	title: 'IProc Learn!',
  	text: "Introduction 1 - Temps estimé: 5-10 minutes",
  	showClass: {
    	popup: 'animated jackInTheBox'
  	}
}).then(function() {

Swal.fire({
  	title: 'Introduction - page 1 / 10',
  	text: "Si vous naviguez sur cette appli, c'est que vous voulez en apprendre plus sur la sécurité. C'est pourquoi cette partie va permet de vous lancer dans ce monde, je dirais même cet univers qu'est la sécurité.",
  	imageUrl: '../../assets/img/ordinateur.png',
  	confirmButtonText: 'Suivant!',
  	showClass: {
    	popup: 'animated fadeIn faster'
  	}
}).then(function() {

Swal.fire({
  	title: 'Introduction - page 2 / 10',
  	text: "Un univers? Et bien oui, il est impossible pour quelqu'un de tout savoir sur la sécurité. Mais voici un petit résumé de ce qu'est la cybersécurité.",
  	imageUrl: '../../assets/img/space.png',
  	imageHeight: 250,
  	confirmButtonText: 'Suivant!',
  	showClass: {
    	popup: 'animated fadeIn faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 3/10",
  	text: "La sécurité informatique est constituée de plusieurs méthodes afin de protégér tout système d'information, que ça soit un ordinateur, un téléphone ou même une carte bleue.",
  	imageUrl: '../../assets/img/SI.png',
  	imageHeight: 250,
  	confirmButtonText: 'Super!',
  	showClass: {
    	popup: 'animated fadeIn faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 4/10",
  	text: "Il n'y a pas que les différents supports, il y a aussi toutes sortes de logiciels comme les pages web, les applications sur son téléphone, et même les photos et vidéos! \"Chaque application est une porte, dont seul leurs créateur à le choix de mettre une serrure, ou la blinder\"",
  	imageUrl: '../../assets/img/SI2.png',
  	imageHeight: 250,
  	confirmButtonText: 'Compris..',
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 5/10 - QUIZZ!",
  	text: "Quelle est la première réaction à avoir lorsqu'on se fait pirater son ordinateur de travail?",
  	imageUrl: '../../assets/img/quizz.png',
  	imageHeight: 250,
  	input: 'select',
		inputOptions: {
		a: "On éteint son ordinateur.",
		b: 'On appelle la police',
		c: 'On en parle a son patron',
		d: "On appelle le technicien en charge de la sécurité de l'entreprise"
		},
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 6/10 - Reponse!",
  	text: "La reponse était: On appelle le technicien en charge de la sécurité de l'entreprise! ",
  	confirmButtonText: 'OK!',	
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 7/10 ",
  	html: "Comme dit précédemment, la cybersécurité est très vaste. C'est pourquoi il existe plusieurs domaines, catégories, dans la sécurité informatique:<br><br>-> <b>Le web</b>, lié à la protection des sites web & des utilisateurs,<br><br>-> <b>Le forensic</b>, lié à l'analyse de virus & systèmes,<br><br>-> <b>La Stéganographie</b>, ou l'art de cacher des messages dans des images,<br><br>-> <b>La cryptographie</b>, ou comment chiffrer un message",
  	confirmButtonText: 'OK!',	
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Introduction - page 8/10",
  	text: "A vous de choisir quels domaines vous souhaitez vous spécialiser, vous pouvez en choisir plusieurs.",
  	confirmButtonText: 'OK!',	
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
	}).then(function() {

Swal.fire({
  	title: "Introduction - page 9/10",
  	text: "Mais n'en choisissez pas trop, vous pourrez tout apprendre de cet appli, mais vous ne pourrez jamais apprendre toutes les méthodes, tellement il y en a.",
  	confirmButtonText: 'OK!',	
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {

Swal.fire({
  	title: "Fin de l'introduction!",
  	text: "Merci d'avoir participé",
  	showClass: {
    	popup: 'animated fadeIn faster'
  	},
  	hideClass: {
    	popup: 'animated fadeOut faster'
  	}
}).then(function() {
	setTimeout(function(){   
		localStorage.setItem("Scorebases1", "1"); window.location="../../main.html"; 
	}, 1000);
});});});});});});});});});});}); // C'est toutes les .then(function({ qui se terminent ici pour que ça soit plus facile à voir