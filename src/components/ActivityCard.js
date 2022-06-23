import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "../styles/Card.css";

class Card extends React.Component {
	render() {
		return (
			<div className="Card">
				<div className="Card-text">
					<h4>{this.props.text}</h4>
					<p>Prix : {this.props.price}€</p>
					<Button text="En savoir plus" link={this.props.link} />
				</div>
				<div className="Card-img">
					<img src={this.props.image} />
				</div>
			</div>
		);
	}
}

//Definitions of props used in this components
Card.propTypes = {
	image: PropTypes.img,
	text: PropTypes.string,
	price: PropTypes.string,
	link: PropTypes.string,
};

export default Card;
