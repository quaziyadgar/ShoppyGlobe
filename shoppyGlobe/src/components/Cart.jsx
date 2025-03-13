import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {!cartItems && <h1>Empty cart</h1>}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between p-4 border">
          <p>{item.title}</p>
          <button
            className="bg-red-500 text-white px-2 py-1 cursor-pointer"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
