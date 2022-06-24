import React from "react";
import Header from "../components/Header";

function errorPage() {
  return (
    <div className="errorPage">
      <Header/>
      <p>This is the 404 error page</p>
    </div>
  );
}

export default errorPage;
