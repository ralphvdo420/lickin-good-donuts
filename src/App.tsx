import lickinLogo from "./assets/lickin-good.svg";

import Header from "./Components/Header";

import About from "./Components/About";
import MenuSides from "./Components/MenuSides";
import "./App.css";
import "./fonts.css";
function App() {
  return (
    <>
      <Header logo={lickinLogo}></Header>
      <About logo={lickinLogo}></About>
      <MenuSides></MenuSides>
    </>
  );
}

export default App;
