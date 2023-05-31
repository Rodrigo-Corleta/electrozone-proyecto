import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cartList, totalPrice, clear } = useContext(CartContext);

  if (cartList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Tu carrito esta vacío</h1>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded m-2">
          Ir al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {cartList.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Total: ${totalPrice()}</h2>
      </div>
      <div className="flex mt-4">
        <button onClick={clear} className="bg-red-500 text-white p-2 rounded m-2">
          Borrar carrito
        </button>
        <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded m-2">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
