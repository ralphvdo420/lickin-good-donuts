import lickinLogo from "./assets/lickin-good.svg";
import Header from "./Components/Header";
import MenuGrid from "./Components/MenuGrid";
import About from "./Components/About";
import MenuTabs from "./Components/MenuTabs";
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <>
      <Header logo={lickinLogo}></Header>
      <About logo={lickinLogo}></About>
      <MenuTabs></MenuTabs>
      <MenuGrid></MenuGrid>
    </>
  );
}

export default App;
