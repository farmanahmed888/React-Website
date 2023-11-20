import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Products';
import Account from './Account';
import Cart from './Cart';
import ProductDetail from './ProductDetail';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Homepage/>}></Route>
            <Route exact path="/Products" element={<Products/>}></Route>
            <Route exact path="/Account" element={<Account/>}></Route>
            <Route exact path="/Cart" state ={""} element={<Cart/>}></Route>
            <Route exact path="/ProductDetail/:id" element={<ProductDetail/>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
