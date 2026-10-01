const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const cartCount = document.querySelector('#cart-count');

menuButton.addEventListener('click', () => {
	const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
	menuButton.setAttribute('aria-expanded', String(!isOpen));
	mobileMenu.classList.toggle('hidden', isOpen);
	mobileMenu.classList.toggle('flex', !isOpen);
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
	button.addEventListener('click', () => {
		cartCount.textContent = Number(cartCount.textContent) + 1;
		button.textContent = 'Added';
		setTimeout(() => { button.textContent = 'Add to order'; }, 1200);
	});
});
