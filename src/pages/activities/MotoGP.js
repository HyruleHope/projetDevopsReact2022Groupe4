import React from "react";
import ActivityPage from "../../components/ActivityPage";
import motoGP from "../../assets/motoGP.jpg";

function MotoGP() {
  return (
    <ActivityPage image={motoGP} name="Course de moto sur circuit" description="Compétitez dans une course de moto en circuit privatisé pour un maximum de 20 personnes" price="100-350"/>
  );
}

export default MotoGP;
