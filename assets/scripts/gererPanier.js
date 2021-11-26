const btnAjouter = [...document.querySelectorAll('.btn_custom-primary')];
let itemsAjouter = [];

const items = {
	megaMerc: {
		img: './assets/img/png/planche1.png',
		name: 'MEGA MERC',
		prix: 899.95,
	},

	indoor: {
		img: './assets/img/png/planche2.png',
		name: 'INDOOR SURVIVAL',
		prix: 669.95,
	},

	doa: {
		img: './assets/img/png/planche3.png',
		name: 'D.O.A.',
		prix: 599.95,
	},

	outsiders: {
		img: './assets/img/png/planche4.png',
		name: 'THE OUTSIDERS',
		prix: 699.95,
	},

	scott: {
		img: './assets/img/png/planche5.png',
		name: 'SCOTT STEVENS PRO',
		prix: 629.95,
	},

	ultra: {
		img: './assets/img/png/planche6.png',
		name: 'ULTRAFEAR',
		prix: 599.95,
	},

	kazu: {
		img: './assets/img/png/planche7.png',
		name: 'KAZU KOKUBO PRO',
		prix: 749.95,
	},

	navigator: {
		img: './assets/img/png/planche8.png',
		name: 'THE NAVIGATOR',
		prix: 599.95,
	},
};

function ajouterAuPanier() {
	const panier = document.querySelector('.offcanvas-body ul');
	const total = document.querySelector('#total');
	const badge = document.querySelector('.badge');

	btnAjouter.map((btn) => {
		btn.addEventListener('click', (e) => {
			const item = document.createElement('li');
			const selected = e.target.getAttribute('data-item');
			const uniqueID = Date.now(); // presque unique, permet de différencier 2 items pareils
			item.classList.add('itemPanier');
			item.setAttribute('id', `${uniqueID}`);

			// gabarit pour mes items
			item.innerHTML = `
            <img src="${items[selected].img}" class="card-img-top img-fluid">
            <div>                
                <h4>
                    ${items[selected].name}
                </h4>
                <p>
                    ${items[selected].prix}
                </p>
                <button class="btn_custom-delete" data-unique="${uniqueID}" data-item="${selected}">Retirer du panier</button>
            </div>
            `;

			panier.append(item);
			itemsAjouter.push(uniqueID);
			//parseFloat pcq innerHTML = string
			total.innerHTML = (parseFloat(total.innerHTML) + items[selected].prix).toFixed(2);
			badge.innerHTML = itemsAjouter.length;
		});
	});
}
ajouterAuPanier();

function clearPanier() {
	const btn = document.querySelector('.btn_custom-clear');

	btn.addEventListener('click', () => {
		const badge = document.querySelector('.badge');
		const panier = document.querySelector('.offcanvas-body ul');
		const total = document.querySelector('#total');
		panier.innerHTML = '';
		total.innerHTML = (0).toFixed(2);
		itemsAjouter = [];
		badge.innerHTML = '';
	});
}
clearPanier();

function deleteItem() {
	const btnRetirer = [...document.querySelectorAll('.itemPanier button')];

	btnRetirer.map((btn) => {
		btn.addEventListener('click', (e) => {
			const badge = document.querySelector('.badge');
			const total = document.querySelector('#total');
			const itemUnique = e.target.getAttribute('data-unique');
			const dataItem = e.target.getAttribute('data-item');
			const itemRemove = document.getElementById(itemUnique);

			// enleve le bon item du "storage"
			itemRemove.remove();
			itemsAjouter = itemsAjouter.filter((itemAjouter) => {
				return itemAjouter != itemUnique;
			});

			// ajuste le nombre d'item du badge
			badge.innerHTML = itemsAjouter.length;

			// parseFloat pcq innerHTML = string
			total.innerHTML = (parseFloat(total.innerHTML) - items[dataItem].prix).toFixed(2);

			// si 0, on l'enlève le badge
			if (total.innerHTML == 0) {
				badge.innerHTML = '';
			}
		});
	});
}
document.querySelector('#panierAchat').addEventListener('click', deleteItem);
