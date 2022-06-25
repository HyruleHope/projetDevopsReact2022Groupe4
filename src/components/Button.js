import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";
import { Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <Link to={this.props.link}>{this.props.text}</Link>
      </div>
    );
  }
}

//Definitions of props used in this components
Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
