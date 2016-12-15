window.cinqDes = [];

window.varDesSelected = [false, false, false, false, false];
window.desSelected = [0, 0, 0, 0, 0]; // contient les valeurs de dés ordreé blanc -> vert. 0 ) = vide
window.nbLances = 0;
window.joueurs = [];
window.indexJoueurCourant = -1;
window.points = 0;

$(function(){ 
//init éléments : 
	// intro
		initNbJ();
	//
	initElements();
	
//init dés: 
	init5Des();
	var a = $('<a>').text('vous devez faire 750 points pour commencer.\nLancez les dés.');
	$('#infosConsignes').append(a);
	var b = $('<a>').text('Séléctionnez et lancer des dés');
	$('#infosCoup').append(b);
		// affichage : 
		
	majEvenementClick();
	
//événements: 
	$('.dés').on('click',traitementClickImage); // fin  ".dés".click
//evenements intro :
	$('#btnNbJ').click(function(){
			var nbJ = $('#nbJ').val();
			genererChampsNoms(nbJ, window.joueurs);
	});
	
// événement jeu	
	$('#boutonLancer').click(traitementBtnLancerDes);
	$('#terminerCoup').click(traitementBtnTerminerCoup);
	
});
