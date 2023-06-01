import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
