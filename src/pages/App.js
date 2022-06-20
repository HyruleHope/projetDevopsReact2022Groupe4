import "../styles/App.css";
import React from "react";

//Function to import on app the whole assets folder, to avoid importing all pictures at once
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const assets = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={assets["logo.svg"]} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
