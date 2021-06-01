import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Home from './Pages/Home/Home'; 
import Product from './Pages/Product/Product'; 
import Cart from './Pages/Cart/Cart'; 

import Navbar from './components/Navbar/Navbar'; 
function App() {
  return (
    <Router>
      <Navbar />
      {/* SideMenu */}
      {/* Background */}
      <main>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/product/:id" component = {Product} />
          <Route exact path = "/cart" component = {Cart} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
