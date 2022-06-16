import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import '../styles/Card.css';
import logo from '../assets/logo.svg';

class Card extends React.Component {
  render() {
    return (
      <div className='Card'>
        <div className='Card-text'>
          <h4>Nom de notre activité au soleil</h4>
          <p>Prix : 345€</p>
          <Button text='En savoir plus'/>
        </div>
        <div className='Card-img'>
          <img src={logo}/>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
};

export default Card;
