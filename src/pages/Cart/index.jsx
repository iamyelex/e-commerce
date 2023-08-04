import { useSelector } from "react-redux";
import CartItems from "./cartItems";

const Cart = () => {
  const { items, totalAmount, totalQuantity } = useSelector(
    (store) => store.cart
  );

  return (
    <>
      {items.length === 0 ? (
        <div className="flex justify-center items-center pt-40">
          <p className="text-xl">Cart is empty</p>
        </div>
      ) : (
        <div className="">
          <h1 className="text-lg uppercase px-4 py-1">cart summary</h1>

          <div className="flex items-center justify-between px-4 py-1 bg-black">
            <p className="font-bold">Subtotal</p>
            <p className="font-bold">$ {totalAmount}</p>
          </div>
          <p className="font-thin uppercase px-4 py-1">
            cart <span>( {totalQuantity} )</span>
          </p>

          {items.map((list) => (
            <CartItems
              key={list.id}
              id={list.id}
              price={list.price}
              title={list.title}
              image={list.image}
              quantity={list.quantity}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
