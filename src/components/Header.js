import React from "react";
import Button from "./Button";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
            <header className="Header-buttons">
              <Button text="Accueil" link="/"/>
              <Button text="Qui somme-nous ?" link="/Faq"/>
              <Button text="Erreur" link="/404"/>
            </header>
        </div>
    );
  }
}

export default Header;
