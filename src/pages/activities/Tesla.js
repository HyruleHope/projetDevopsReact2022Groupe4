import React from "react";
import ActivityPage from "../../components/ActivityPage";
import tesla from "../../assets/tesla.jpg";

function Tesla() {
  return (
    <ActivityPage image={tesla} name="Essaie de la dernière Tesla" description="Profiter d'une journée dans la centrale française Tesla pour essayer leur dernier modèles encadré par un ingénieur de l'entreprise" price="(Par personne) 250"/>
  );
}

export default Tesla;
