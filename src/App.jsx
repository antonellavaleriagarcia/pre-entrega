
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartWidget } from './Context/CartWidgetContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
   <>
      <BrowserRouter>
      <CartWidget>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:idCat' element={ <ItemListContainer/> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>} />
          </Routes>
        </CartWidget>
      </BrowserRouter>
   </>
  );
}

export default App;
