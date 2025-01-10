// import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import NavNetflix from "./components/NavNetflix";
import MyFooter from "./components/MyFooter";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavNetflix />
      <MyFooter />
    </>
  );
}

export default App;
