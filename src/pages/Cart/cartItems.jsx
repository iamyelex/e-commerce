/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart, removeFromCart } from "./cartSlice";

const CartItems = ({ price, title, image, id, quantity }) => {
  const dispatch = useDispatch();

  const removeCart = function () {
    dispatch(removeFromCart(id));
  };

  const addCart = function () {
    dispatch(increaseCart(id));
  };

  const reduceCart = function () {
    dispatch(decreaseCart(id));
  };

  return (
    <div className="my-3">
      <div className="p-2 mx-2 rounded-lg bg-black">
        <div className="flex  items-center space-x-3">
          <img src={image} alt="" className="h-12 w-12 ob" />
          <div>
            <p>{title}</p>
            <p># {price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between lg:w-96 mt-3">
          <button className="text-" onClick={removeCart}>
            &times; REMOVE
          </button>
          <button className="border w-8" onClick={reduceCart}>
            -
          </button>
          <span>{quantity}</span>
          <button className="border w-8" onClick={addCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
