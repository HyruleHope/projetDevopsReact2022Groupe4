import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Card from "./ActivityCard";
import harley from "../assets/harley.jpg";
import divider from "../assets/divider.png";
import "../styles/ActivityPage.css";

class ActivityPage extends React.Component{
  render(){
  return (
    <div className="activity-page">
      <div className="top-section">
      <div className="section-image">
        <img src={this.props.image} alt="photo de l'activité"></img>
      </div>
      <div className="section-text">
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <p>Prix TTC du Séminaire : {this.props.price} €</p>
        <p>Vous êtes intéréssé par cette activité :</p>
        <Button classname="Button1" text="Contactez-nous" link="mailto:a_brusa@etu-webschoolfactory.fr"/>
      </div>
      </div>
      <div className="see-also">
        <h2>Vous serez aussi intéréssé par :</h2>
        <img className="divider" src={divider}></img>
      </div>
      <div className="activity-list">
        <Card text="Balade en grosse moto qui crache" price="2458" image={harley}/>
        <Card text="Balade en grosse moto qui crache" price="2458" image={harley}/>
      </div>
      <div className="activity-list">
        <Card text="Balade en grosse moto qui crache" price="2458" image={harley}/>
        <Card text="Balade en grosse moto qui crache" price="2458" image={harley}/>
      </div>
    </div>
  );
  }
}

//Definitions of props used in this components
ActivityPage.propTypes = {
  image: PropTypes.img,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

export default ActivityPage;
