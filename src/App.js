import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
        <Route path="/item/:itemId" element= {<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
