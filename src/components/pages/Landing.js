import React from "react";
import "../../styles/Landing.css";

const Landing = () => {
  return (
    <div className="main">
      <div className="anim-container">
        <span className="shutter top"></span>
        <span className="shutter bottom"></span>
      </div>
      {/* <div className="car-carousel">
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
			</div> */}
      <script src="../Carousel.js"></script>
    </div>
  );
};

export default Landing;
