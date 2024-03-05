import "../index.css";
import inventory from "../imgs/inventory.jpg";
import { Parallax } from "react-parallax";
type LogoProps = {
  logo: string;
};
const Header = ({ logo }: LogoProps) => {
  return (
    <>
      <div className="flex relative items-center gap-4 w-full max-w-[1200px] h-[300px] mx-auto p-5 lg:mt-10">
        <img className="size-10" src={logo} alt="" />
        <h1 className="text-3xl font-custom text-white">
          Lickin Good Donuts of Soddy-Daisy
        </h1>
        <img
          className="drop-shadow-md absolute top-0 opacity-25 left-0 object-cover -z-10 w-full h-full max-w-[1200px] "
          src={inventory}
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
