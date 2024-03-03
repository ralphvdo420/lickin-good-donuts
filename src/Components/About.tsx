type LogoProps = {
  logo: string;
};
const About = ({ logo }: LogoProps) => {
  return (
    <>
      <img
        className="mt-10 mb-5 mx-auto w-[50%] max-w-[200px]"
        src={logo}
        alt=""
      />
      <h1 className="text-white font-custom text-center text-3xl">
        Welcome Swarm
      </h1>
      <p className="text-custom text-white text-center w-[80%] mx-auto">
        We make Fresh Homemade Donuts, Breakfast Burritos, Hot/Cold Coffee
        DAILY! Come get your fix!
      </p>
    </>
  );
};

export default About;
