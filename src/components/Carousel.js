const animContainer = document.querySelector('.anim-container');

const carousels = [...document.querySelectorAll(".carousel")];

// eslint-disable-next-line no-unused-vars
let carousel_index = 0;

setTimeout(() => {
	animContainer.remove();
	carousels[0].classList.add("active");
}, 3500);