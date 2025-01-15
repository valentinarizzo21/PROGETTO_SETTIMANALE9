// import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import NavNetflix from "./components/NavNetflix";
import MyFooter from "./components/MyFooter";
import MyTrending from "./components/MyTrending";
import DetailsOfMovie from "./components/NewDetailsFilm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavNetflix />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/description/:filmID" element={<DetailsOfMovie />} />
        <Route
          path="/trending"
          element={
            <>
              <MyTrending
                identity="firstSec"
                title="Trending Now"
                query="http://www.omdbapi.com/?apikey=88599aa0&s=Marvel" //end point sbagliato, quello corretto è: http://www.omdbapi.com/?apikey=88599aa0&s=Marvel
              />
              <MyTrending
                identity="secondSec"
                title="Whatch it again"
                query="http://www.omdbapi.com/?apikey=88599aa0&s=Fun"
              />
              <MyTrending
                identity="thirdSec"
                title="New Releases"
                query="http://www.omdbapi.com/?apikey=88599aa0&s=Sherlock"
              />
            </>
          }
        />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
