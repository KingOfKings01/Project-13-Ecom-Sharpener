import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MainComponents/MyNavbar"
import Footer from './components/MainComponents/Footer';
import Cart from './components/Cart/Cart';
import Home from './Pages/Home';
import { useState } from 'react';
import CartProvider from './components/Store/cartProvider';

function App() {
  const [isCart, setIsCart] = useState(false);
  return (
    <CartProvider>
      <MyNavbar setIsCart={setIsCart}/>
      <Home />
      { isCart && <Cart /> }
      <Footer />
    </CartProvider>
  )
}

export default App
