import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
import items from "./components/constanteItems";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Tienda de Postres</h1>
      </header>
      <NavBar />
      <ItemList items={items}/>
    </div>
  );
}

export default App;
