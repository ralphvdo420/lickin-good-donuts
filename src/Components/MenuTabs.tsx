import { useState } from "react";
import closingShop from "../imgs/closing-shop.jpg";
const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("glazed");

  const changeTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="mt-6 mx-auto w-[90%] max-w-[1200px]">
        {/* Tab headers */}
        <div className="grid grid-cols-2 gap-5 mb-4">
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("glazed")}
          >
            GLAZED DONUTS
          </button>
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("filled")}
          >
            FILLED DONUTS
          </button>
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("specialty")}
          >
            SPECIALTY DONUTS
          </button>
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("dozen")}
          >
            BY THE DOZEN
          </button>
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("jelly")}
          >
            JELLY
          </button>
          <button
            className="py-2 px-4 bg-tan font-bold"
            onClick={() => changeTab("cakes")}
          >
            CAKES
          </button>
        </div>
      </div>

      <div className="relative mx-auto w-[90%] h-[320px] p-10 max-w-[1200px] text-left md:text-center">
        {activeTab === "glazed" && (
          <>
            <h1 className="text-white text-2xl">
              Glazed Donuts <span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Chocolate Covered<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Caramel Covered<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Strawberry Covered<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Sprinkled Donuts<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Salted Caramel<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Maple Bacon<span className="ml-1 text-hotpink">1.79</span>
            </h1>
          </>
        )}
        {activeTab === "filled" && (
          <>
            <h1 className="text-white text-2xl">
              White Cream Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              White Cream Eclair<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Bavarian<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Eclair<span className="ml-1 text-hotpink">1.79</span>
            </h1>
          </>
        )}
        {activeTab === "specialty" && (
          <>
            <h1 className="text-white text-2xl">
              Cinnamon Twists<span className="ml-1 text-hotpink">2.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Cinnamon Rolls<span className="ml-1 text-hotpink">2.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Apple Fritters<span className="ml-1 text-hotpink">2.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Donut Holes Dz<span className="ml-1 text-hotpink">2.99</span>
            </h1>
          </>
        )}
        {activeTab === "dozen" && (
          <>
            <h1 className="text-4xl text-white font-bold">
              <span className="text-hotpink">M</span>
              <span className="text-tan">L</span>
            </h1>
            <h1 className="text-white text-2xl">
              Glazed Dozen<span className="ml-1 text-hotpink">7.49</span>
              <span className="ml-1 text-tan">12.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Cake and Covered<span className="ml-1 text-hotpink">7.49</span>
              <span className="ml-1 text-tan">12.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Maple Bacon<span className="ml-1 text-hotpink">9.49</span>
              <span className="ml-1 text-tan">17.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Filled & Sprinkles<span className="ml-1 text-hotpink">9.49</span>
              <span className="ml-1 text-tan">17.99</span>
            </h1>
            <h1 className="text-white text-2xl">
              Mixed Donuts<span className="ml-1 text-hotpink">9.49</span>
              <span className="ml-1 text-tan">17.99</span>
            </h1>
          </>
        )}

        {activeTab === "jelly" && (
          <>
            <h1 className="text-white text-2xl">
              Blueberry Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Apple Pie Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Lemon Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Raspberry Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
            <h1 className="text-white text-2xl">
              Strawberry Filled<span className="ml-1 text-hotpink">1.79</span>
            </h1>
          </>
        )}

        {activeTab === "cakes" && (
          <>
            <h1 className="text-white text-2xl">
              Dutch Chocolate<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Sour Cream<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Blueberry<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Red Velvet<span className="ml-1 text-hotpink">1.49</span>
            </h1>
            <h1 className="text-white text-2xl">
              Triple Dutch<span className="ml-1 text-hotpink">1.49</span>
            </h1>
          </>
        )}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-5"
          src={closingShop}
          alt=""
        />
      </div>
    </>
  );
};

export default MenuTabs;
