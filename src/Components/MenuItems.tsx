const MenuItems = () => {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 mt-10 mx-auto w-[85%] max-w-[600px]">
        <div>
          <h1 className="text-2xl font-custom text-hotpink">
            <span className="text-tan mr-1">Glazed</span>Donuts
          </h1>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.49</span>Chocolate Covered
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.49</span>Caramel Covered
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.49</span>Strawberry Covered
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>Sprinkled Donuts
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>Salted Caramel
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>Maple Bacon
          </p>
        </div>
        <div>
          <h1 className="font-custom text-hotpink text-2xl">
            <span className="text-tan">Filled</span> Donuts
          </h1>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>White Cream Filled
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>White Cream Eclair
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>Bavarian
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">1.79</span>Eclair
          </p>
        </div>
        <div>
          <h1 className="font-custom text-hotpink text-2xl">
            <span className="text-tan mr-1">Specialty</span>Donuts
          </h1>
          <p className="text-white">
            <span className="text-hotpink mr-1">2.99</span>Cinnamon Twists
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">2.99</span>Cinnamon Rolls
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">2.99</span>Apple Fritters
          </p>
          <p className="text-white">
            <span className="text-hotpink mr-1">2.99</span>Donut Holes Dz
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 mt-10 mx-auto w-[95%] max-w-[600px]">
        <div>
          <h1 className="font-custom text-hotpink text-2xl">
            By The Dozen <span className="text-tan">M/L</span>
          </h1>
          <p className="text-white">
            <span className="text-tan mr-1">7.49/12.99</span>Glazed Dozen
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">7.49/12.99</span>Cake & Covered
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">9.49/17.99</span>Maple Bacon
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">9.49/17.99</span>Filled & Sprinkles
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">9.49/17.99</span>Mixed Donuts
          </p>
        </div>

        <div>
          <h1 className="font-custom text-hotpink text-2xl">Jelly</h1>
          <p className="text-white">
            <span className="text-tan mr-1">1.79</span>Blueberry Filled
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.79</span>Apple Pie Filled
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.79</span>Lemon Filled
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.79</span>Raspberry Filled
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.79</span>Strawberry Filled
          </p>
        </div>
        <div>
          <h1 className="font-custom text-hotpink text-2xl">Cakes</h1>
          <p className="text-white">
            <span className="text-tan mr-1">1.49</span>Dutch Chocolate
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.49</span>Sour Cream
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.49</span>Blueberry
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.49</span>Red Velvet
          </p>
          <p className="text-white">
            <span className="text-tan mr-1">1.49</span>Triple Dutch
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
