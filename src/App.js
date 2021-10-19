import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import Contador from "./components/contador"



function App() {
  return (
    <div className="App">
      <header>
        <h1>Tienda de Postres</h1>
      </header>
      <NavBar />
      <Contador/>
    </div>
  );
}


export default App;
