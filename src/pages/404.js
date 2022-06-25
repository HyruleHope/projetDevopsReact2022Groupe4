import React from "react";
import "../styles/404.css"

function errorPage() {
  return (
    <div className="errorPage">
      <body className="errorBody">
        <div id="container">
            <div className="content">
                <h2>404</h2>
                <h4>Page non trouvée</h4>
                <p>La page demandé est introuvable</p>
                <a href="/">Revenir sur le site</a>
            </div>
        </div>
      </body>
    </div>
  );
}

var container = document.getElementById('container');
window.onmousemove = function(e){
    var x = - e.clientX/5;
    var y = - e.clientY/5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}

export default errorPage;