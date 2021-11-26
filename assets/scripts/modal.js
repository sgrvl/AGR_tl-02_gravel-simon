function openModal() {
	// cliquer sur toute la carte ouvre la modal, mais pas sur ajouter
	const cards = [...document.querySelectorAll('.card')];

	cards.map((card, index) => {
		const btnPri = [...document.querySelectorAll('.card .btn_custom-primary')];
		const btnSec = [...document.querySelectorAll('.card .btn_custom-secondary')];

		card.addEventListener('click', (e) => {
			if (e.target !== btnPri[index]) {
				btnSec[index].click();
			}
		});
	});
}
openModal();
