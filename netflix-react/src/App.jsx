// import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import NavNetflix from "./components/NavNetflix";
import MyFooter from "./components/MyFooter";
import MyTrending from "./components/MyTrending";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavNetflix />
      <MyTrending
        identity="firstSec"
        title="Trending Now"
        query="http://www.omdbapi.com/?apikey=88599aa0&s=Marvel"
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
      <MyFooter />
    </>
  );
}

export default App;
