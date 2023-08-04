/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart, removeFromCart } from "./cartSlice";
import CartRemoveWarning from "./cartRemoveWarning";
import { useState } from "react";

const CartItems = ({ price, title, image, id, quantity }) => {
  const [removeItem, setRemoveItem] = useState(false);

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

  const removeItemHandler = function () {
    setRemoveItem(true);
  };

  const cancelHandler = function () {
    setRemoveItem(false);
  };

  return (
    <div className="my-3">
      <div className="relative p-2 mx-2 rounded-lg bg-black">
        {removeItem && (
          <CartRemoveWarning removeCart={removeCart} cancelHandler={cancelHandler} />
        )}
        <div className="flex  items-center space-x-3">
          <img src={image} alt="" className="h-12 w-12 ob" />
          <div>
            <p>{title}</p>
            <p>$ {price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between lg:w-96 mt-3">
          <button className="text-" onClick={removeItemHandler}>
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
