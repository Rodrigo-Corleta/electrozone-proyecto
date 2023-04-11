import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar";

function App() {
  return (
  <>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenido a tu tienda online favorita'}/>
  </>
  );
}

export default App;
