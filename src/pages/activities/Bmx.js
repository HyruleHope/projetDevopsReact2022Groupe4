import React from "react";
import ActivityPage from "../../components/ActivityPage";
import bmx from "../../assets/bmx.jpg";

function Bmx() {
  return (
    <ActivityPage image={bmx} name="Parcous de BMX" description="Nous organisons pour vous une course de BMX sur terrain à obsctacle, encadré par un formateur de renommé" price="(Par personne) 70"/>
  );
}

export default Bmx;
