import React from "react";
import PropTypes from "prop-types";
import "../styles/Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <a href={this.props.link}>{this.props.text}</a>
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
