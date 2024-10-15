import 'bootstrap/dist/css/bootstrap.min.css';
import  MyNavbar  from "./components/MyNavbar"
import Hero from './components/Hero';
import Products from './components/Products';
import CartButton from './components/CartButton';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <MyNavbar />
      <Hero />
      <Products />
      <CartButton/>
      <Footer/>
    </>
  )
}

export default App
