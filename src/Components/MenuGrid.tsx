import blueDonut from "../imgs/blue-donut.jpg";
import brownSugar from "../imgs/brown-sugar-cinnamon.jpg";
import caramelFrap from "../imgs/caramel-frap.jpg";
import chocGlazed from "../imgs/choc-glazed.jpg";
import freshGlazed from "../imgs/fresh-glazed.jpg";
import pinkDonuts from "../imgs/pink-donuts.jpg";
import "../menutabs.css";

const MenuGrid = () => {
  return (
    <>
      <div className="mt-10 grid mx-auto w-[90%] max-w-[1200px] gap-3 grid-cols-2 md:grid-cols-3">
        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={blueDonut}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={brownSugar}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={pinkDonuts}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={chocGlazed}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={caramelFrap}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={freshGlazed}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MenuGrid;
