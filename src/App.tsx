import lickinLogo from "./assets/lickin-good.svg";

import Header from "./Components/Header";

import MenuGrid from "./Components/MenuGrid";
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
      <MenuGrid></MenuGrid>
    </>
  );
}

export default App;
