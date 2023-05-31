import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white absolute top-0 left-0 w-full z-10">
      <div className="mx-auto py-4 px-8 flex justify-between items-center">
        <Link to="/" className="flex justify-center items-center">
          <img src="/images/electrozone.png" alt="logo" className="h-10 inline" />
        </Link>
        <ul className="flex clex-col md:flex-row justify-center w-full items-center gap-2 p-8 md:p-0 text-center pb-0">
          <li className="mx-4">
            <Link to="/category/Notebooks y PC" className="text-xl hover:text-blue-800 transition-colors">
              Notebooks y PC
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/category/Telefono" className="text-xl hover:text-blue-800 transition-colors">
              Teléfonos
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/category/Accesorios" className="text-xl hover:text-blue-800 transition-colors">
              Accesorios
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/category/Televisores" className="text-xl hover:text-blue-800 transition-colors">
              Televisores
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
