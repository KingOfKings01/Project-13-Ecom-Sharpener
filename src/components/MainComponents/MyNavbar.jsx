import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import cartContext from '../Store/cartContext';
import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';

import {
  NavLink
} from "react-router-dom";


function MyNavbar() {
  const { totalCartItems } = useContext(cartContext)
  const [isCart, setIsCart] = useState(false);
  return (
    <>
    <Navbar expand="lg" className="bg-dark position-fixed w-100" style={{height:"10vh"}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center w-100">
            <Nav.Link href="/" className='text-light px-5'>Home</Nav.Link>
            {/* <Nav.Link href="#link" className='text-light px-5'>Store</Nav.Link> */}
            <Nav.Link href="/about" className='text-light px-5'>About</Nav.Link>
          </Nav>
          <Button onClick={()=> setIsCart(prev=>!prev)} variant="light" className='position-fixed' style={{width:"100px", right:"40px"}}>Cart {totalCartItems}</Button>
        </Navbar.Collapse>
      </Container>
      { isCart && <Cart /> }
    </Navbar>

    {/* For blank space */}
    <div style={{backgroundColor:"transparent", height:"10vh"}}></div>
    </>
  );
}

export default MyNavbar;