import React from "react";
import "../../styles/Landing.css";
import ActivityCard from "../ActivityCard";
import "../../styles/Card.css";
import harley from "../../assets/harley.jpg";
import motoGP from "../../assets/motoGP.jpg";

const Landing = () => {
	return (
		<body>
			<div className="intro">
				<div className="anim-container">
					<span className="shutter top"></span>
					<span className="shutter bottom"></span>
				</div>
				<div className="title">
					<h2>VIVEZ UNE EXPERIENCE INOUBLIABLE</h2>
				</div>
				<div className="text">
					<h1>Découvrez nos offres :</h1>
				</div>
				<div className="activity">
					<ActivityCard
						text="Ballade en Harley Davidson"
						price="1500"
						image={harley}
					/>
					<ActivityCard
						text="tour de piste en Moto GP"
						price="2000"
						image={motoGP}
					/>
				</div>
			</div>
		</body>
	);
};

export default Landing;
