import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import CartProvider from './components/Store/cartProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Layout from './components/Layout/Layout';
import Store from './Pages/Store';
import Contact from './Pages/Contact';
import Product from './Pages/Product';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/store/:id' element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
