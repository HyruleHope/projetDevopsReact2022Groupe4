import React from "react";
import ActivityPage from "../../components/ActivityPage";
import panda from "../../assets/panda.jpg";

function Musicar() {
  return (
    <ActivityPage image={panda} name="Musique et Voiture: un parfait mélange" description="Venez faire un tour dans des véhicule équipé des dernieres enceinte Bose et discuter avec le DJ fan d'automobile : Pandaloux" price="500"/>
  );
}

export default Musicar;
