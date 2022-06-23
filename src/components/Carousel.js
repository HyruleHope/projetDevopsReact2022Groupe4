const animContainer = document.querySelector(".anim-container");

const carousels = [...document.querySelectorAll(".carousel")];

// eslint-disable-next-line no-unused-vars
let carousel_index = 0;

setTimeout(() => {
	animContainer.remove();
	carousels[0].classList.add("active");
}, 3500);
{
	/* <div className="car-carousel">
				<div className="carousel">
					<h1 className="title">
						Tour de <br>circuit</br>
					</h1>
					<button className="btn">Explore</button>
				</div>
				<div className="carousel">
					<h1 className="title">
						Experiences <br>inoubliables</br>
					</h1>
					<button className="btn">Explore</button>
				</div>
				<div className="carousel">
					<h1 className="title">
						Concept <br>incroyable</br>
					</h1>
					<button className="btn">Explore</button>
				</div>
			</div> */
}
