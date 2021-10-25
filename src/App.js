import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import ItemList from "./components/lista de items/ItemList";
import items from "./components/constanteItems";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ItemDetail from "./components/lista de items/itemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Tienda de Ropa</h1>
        </header>
        <NavBar />
      </div>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
          <ItemDetail />
        </Route>
        <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  function Home() {
    return <h2>Home</h2>;
  }
  function Products() {
    return (
      <div className="App">
        <ItemList items={items} />
      </div>
    );
  }
  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
