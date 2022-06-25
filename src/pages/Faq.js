import React from "react";
import Header from "../components/Header";
import "../styles/Faq.css"

function Faq() {
  return (
    <div className="Faq">
      <Header/>
  <h2 className="FaqTitle">
    Faq
  </h2>
  <div className="layout">
    <div className="accordion">
      <div className="accordion__question">
        <p>Quel services vous proposez ?</p>
  
      </div>
      <div className="accordion__answer">
        <p>Nous organisons des évènements autour en automobile et moto</p>
      </div>
    </div>
  
    <div className="accordion">
      <div className="accordion__question">
        <p>Comment je peux régler ?</p>
      </div>
  
      <div className="accordion__answer">
        <p>
            Vous pouvez payer en ligne ou sur place le jour J, nous acceptons les espèces, chèque et carte bleue.
        </p>
      </div>
    </div>

    <div className="accordion">
       <div className="accordion__question">
         <p>Vous acceptez les débutants dans vos activités ?</p>
       </div>
    
       <div className="accordion__answer">
         <p>
           Bien sur, nos évènements sont ouverts aux novices comme aux experts, venez comme vous êtes.
         </p>
       </div>
    </div>

    <div className="accordion">
        <div className="accordion__question">
            <p>Comment me faire rembourser ?</p>
        </div>
        
        <div className="accordion__answer">
            <p>
            Toutes questions liée au remboursement doivents se faire avec notre SAV, disponible à cette addresse: a_brusa@etu-webschoolfactory.fr
            </p>
        </div>
    </div>

    <div className="accordion">
        <div className="accordion__question">
            <p>Où sont vos Locaux ?</p>
        </div>
            
        <div className="accordion__answer">
            <p>
            Nous ne possédons pas de bureaux officiels, vous pouvez nous rencontrer lors des activités.
            </p>
        </div>
    </div>
  </div>
    </div>
  );
}

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

export default Faq;
