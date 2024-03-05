import chocDonut from "../imgs/choc-donut.jpg";
import { Parallax } from "react-parallax";

const Footer = () => {
  return (
    <>
      <Parallax
        bgImage={chocDonut}
        strength={600}
        className="rounded-3xl mt-10 object-cover w-full max-w-[800px] h-[400px] mx-auto"
        blur={{ min: -15, max: 15 }}
      ></Parallax>
    </>
  );
};

export default Footer;
