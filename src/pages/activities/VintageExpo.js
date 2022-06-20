import React from "react";
import ActivityPage from "../../components/ActivityPage";
import vintage from "../../assets/vintage-expo.jpg";

function VintageExpo() {
  return (
    <ActivityPage
      image={vintage}
      name="Visite du musée Renault"
      description="Venez visiter pour votre séminaire le musée Renault, et découvrir toutes les voitures qui ont fait l'histoire de la marque"
      price="(Par personne) 20"
    />
  );
}

export default VintageExpo;
