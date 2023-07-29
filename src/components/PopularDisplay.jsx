/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../pages/Cart/cartSlice";

const PopularDisplay = ({ products, price, image, id }) => {
  const dispatch = useDispatch();

  const title = products.substring(0, 17);

  function addItems() {
    dispatch(addToCart(price, title, id, image));
  }

  return (
    <div className="text-center border border-black p-2 h-56 rounded-lg">
      <img
        src={image}
        alt="product name"
        className="w-full h-24 rounded-t-lg"
      />
      <p className="text-sm font-thin pt-2">{title}</p>
      <p className="text-sm font-bold">$ {price}</p>
      <button
        className="font-bold bg-black w-full rounded-lg mt-8 hover:text-black hover:bg-white outline-none hover:ease-in duration-300"
        onClick={addItems}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PopularDisplay;
