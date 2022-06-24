import "../../styles/App.css";
import React from "react";
import Landing from "./Landing";
import Header from "../components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
