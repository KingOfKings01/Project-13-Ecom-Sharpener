import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MainComponents/MyNavbar"
import Footer from './components/MainComponents/Footer';
import Cart from './components/Cart/Cart';
import Home from './Pages/Home';
import { useState } from 'react';

function App() {
  const [isCart, setIsCart] = useState(true);
  return (
    <>
      <MyNavbar setIsCart={setIsCart}/>
      { isCart ? <Home /> : <Cart /> }
      <Footer />
    </>
  )
}

export default App
