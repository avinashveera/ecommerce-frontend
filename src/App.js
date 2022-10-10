import './App.css';
 import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from "./pages/Login"
import Cart from './pages/Cart';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {

  const login=false;

  return (


    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/product' element={<Product />} />
  <Route path='/products' element={<Products />} />
</Routes>
    
            

</BrowserRouter>


  );
}

export default App;
