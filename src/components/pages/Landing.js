import React from "react";
import "../../styles/Landing.css";
import ActivityCard from "../ActivityCard";
import "../../styles/Card.css";
import harley from "../../assets/harley.jpg";
import motoGP from "../../assets/motoGP.jpg";
import bmx from "../../assets/bmx.jpg";
import musicar from "../../assets/panda.jpg";
import vintageExpo from "../../assets/vintage-expo.jpg";
import formule1 from "../../assets/formule-1.jpg";
import tesla from "../../assets/tesla.jpg";

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
						text="Balade en Harley Davidson"
						price="1500"
						image={harley}
					/>
					<ActivityCard
						text="Tour de piste en Moto GP"
						price="2000"
						image={motoGP}
					/>
				</div>
				<div className="activity">
					<ActivityCard text="Parcours de Moto-cross" price="70" image={bmx} />
					<ActivityCard text="Musique en voiture" price="500" image={musicar} />
				</div>
				<div className="activity">
					<ActivityCard
						text="Visite du musée Renault"
						price="20"
						image={vintageExpo}
					/>
					<ActivityCard
						text="Course privée de Formule 1"
						price="3500"
						image={formule1}
					/>
				</div>
				<ActivityCard
					text="Essaie de la dernière Tesla"
					price="(Par personne) 250"
					image={tesla}
				/>
			</div>
		</body>
	);
};

export default Landing;
