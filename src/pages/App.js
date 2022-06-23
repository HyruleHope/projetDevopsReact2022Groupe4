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
    
  );
}
export default App;