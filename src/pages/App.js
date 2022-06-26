import "../styles/App.css";
import React from "react";
import Header from "../components/Header";
import ActivityCard from "../components/ActivityCard";
import harley from "../assets/harley.jpg";
import motoGP from "../assets/motoGP.jpg";
import bmx from "../assets/bmx.jpg";
import musicar from "../assets/panda.jpg";
import vintageExpo from "../assets/vintage-expo.jpg";
import formule1 from "../assets/formule-1.jpg";
import tesla from "../assets/tesla.jpg";

function App() {
  return (
    <body className="landingPage">
      <div className="header">
        <Header />
      </div>
      <div className="intro">
        <div className="title">
          <h1>VIVEZ UNE EXPERIENCE INOUBLIABLE</h1>
        </div>
        <div className="text">
          <h1>Découvrez nos activités :</h1>
        </div>
        <div className="activity">
          <ActivityCard
            text="Balade en Harley Davidson"
            price="1500"
            image={harley}
            link="Harley"
          />
          <ActivityCard
            text="Tour de piste en Moto GP"
            price="2000"
            image={motoGP}
            link="MotoGP"
          />
        </div>
        <div className="activity">
          <ActivityCard
            text="Parcours de Moto-cross"
            price="70"
            image={bmx}
            link="Bmx"
          />
          <ActivityCard
            text="Musique en voiture"
            price="500"
            image={musicar}
            link="Musicar"
          />
        </div>
        <div className="activity">
          <ActivityCard
            text="Visite du musée Renault"
            price="20"
            image={vintageExpo}
            link="VintageExpo"
          />
          <ActivityCard
            text="Course privée de Formule 1"
            price="3500"
            image={formule1}
            link="Formula1"
          />
        </div>
        <div className="activity">
          <ActivityCard
            text="Essaie de la dernière Tesla"
            price="(Par personne) 250"
            image={tesla}
            link="Tesla"
          />
        </div>
      </div>
    </body>
  );
}

export default App;
