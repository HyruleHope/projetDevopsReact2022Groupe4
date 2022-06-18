import React from "react";
import ActivityPage from "../../components/ActivityPage";
import harley from "../../assets/harley.jpg";

function Harley() {
  return (
    <ActivityPage image={harley} name="Ballade en Harley Davidson" description="Tenté par un road trip de 2 jours en Harley ? choisisez parmis 5 modèle différents pour un groupe de 20 personnes" price="1500"/>
  );
}

export default Harley;
