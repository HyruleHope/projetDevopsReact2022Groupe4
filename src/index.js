import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./pages/App";
import ErrorPage from "./pages/404";
import Faq from "./pages/Faq";
import Bmx from "./pages/activities/Bmx"
import Formula1 from "./pages/activities/Formula1"
import Harley from "./pages/activities/Harley"
import MotoGP from "./pages/activities/MotoGP"
import Musicar from "./pages/activities/Musicar"
import Tesla from "./pages/activities/Tesla"
import VintageExpo from "./pages/activities/VintageExpo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="Bmx" element={<Bmx />} />
        <Route path="Formula1" element={<Formula1 />} />
        <Route path="Harley" element={<Harley />} />
        <Route path="MotoGP" element={<MotoGP />} />
        <Route path="Musicar" element={<Musicar />} />
        <Route path="Tesla" element={<Tesla />} />
        <Route path="VintageExpo" element={<VintageExpo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
