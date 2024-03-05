import lickinLogo from "./assets/lickin-good.svg";
import Header from "./Components/Header";
import MenuGrid from "./Components/MenuGrid";
import About from "./Components/About";
import MenuTabs from "./Components/MenuTabs";
import Footer from "./Components/Footer";
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <>
      <Header logo={lickinLogo}></Header>
      <About logo={lickinLogo}></About>
      <MenuTabs></MenuTabs>
      <MenuGrid></MenuGrid>
      <Footer></Footer>
      <MenuGrid></MenuGrid>
      <div className="h-[600px]"></div>
    </>
  );
}

export default App;
