import React from "react";
import ActivityPage from "../../components/ActivityPage";
import Formule1 from "../../assets/formule-1.jpg";

function Formula1() {
  return (
    <ActivityPage
      image={Formule1}
      name="Course privé de Formule 1"
      description="Participez a une course privatisé à bord des derniers modèles de Formule 1 (formation de 2 jours incluse et apperitif dinatoire le 3ème jours"
      price="3500"
    />
  );
}

export default Formula1;
