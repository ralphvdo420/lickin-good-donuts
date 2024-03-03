import React from "react";
import blueDonut from "../imgs/blue-donut.jpg";
import breakfast from "../imgs/breakfast.jpg";
import brownSugar from "../imgs/brown-sugar-cinnamon.jpg";
import caramelFrap from "../imgs/caramel-frap.jpg";
import chocDonut from "../imgs/choc-donut.jpg";
import chocDonuts from "../imgs/choc-donuts.jpg";
import chocGlazed from "../imgs/choc-glazed.jpg";
import closingShop from "../imgs/closing-shop.jpg";
import freshGlazed from "../imgs/fresh-glazed.jpg";
import hotChocs from "../imgs/hot-chocolates.jpg";
import insideShop from "../imgs/inside-shop.jpg";
import inventory from "../imgs/inventory.jpg";
import islandDonut from "../imgs/island-donut.jpg";
import jellyFilled from "../imgs/jelly-filled.jpg";
import mixedBox from "../imgs/mixed-box.jpg";
import niceView from "../imgs/nice-view.jpg";
import pinkDonuts from "../imgs/pink-donuts.jpg";
import saltedCaramel from "../imgs/salted-caramel.jpg";
import shopWindow from "../imgs/shop-window.jpg";
import snickersFrap from "../imgs/snickers-frap.jpg";

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

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={mixedBox}
            alt=""
          />
        </div>

        <div>
          <img
            className="h-[300px] w-full object-cover"
            src={snickersFrap}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MenuGrid;
