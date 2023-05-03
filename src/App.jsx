
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';


function App() {
  return (
   <>
    <NavBar />
    <ItemListContainer greeting="Bienvenidxs"/>
   </>
  );
}

export default App;
