import React from "react";
import Button from "./Button";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
            <header className="Header-buttons">
                 <Button text="Acceuil" link=""/>
               <Button text="Qui somme-nous ?" link=""/>
               <Button text="Erreur" link=""/>
            </header>
        </div>
    );
  }
}

export default Header;
