import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="flex items-center">
      <img src="/images/shopping-cart.svg" alt="carrito" className="w-6 h-6 mr-2" />
      <span className="text-white-700">{totalItems()}</span>
    </Link>
  );
};

export default CartWidget;
