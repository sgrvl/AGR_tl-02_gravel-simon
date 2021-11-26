function cardHover() {
	const cards = [...document.querySelectorAll('.card')];

	cards.map((card, index) => {
		const btnPri = [...document.querySelectorAll('.card .btn_custom-primary')];
		const btnSec = [...document.querySelectorAll('.card .btn_custom-secondary')];

		// On ajoute la classe "secondary-hover" on mouseover
		card.addEventListener('mouseover', (e) => {
			btnSec[index].classList.add('secondary-hover');

			// MAIS, on l'enlève si on est sur le bouton ajouter
			if (e.target == btnPri[index]) {
				btnSec[index].classList.remove('secondary-hover');
			}
		});

		// On enlève tout on mouseout
		card.addEventListener('mouseout', () => {
			btnSec[index].classList.remove('secondary-hover');
		});
	});
}
cardHover();
