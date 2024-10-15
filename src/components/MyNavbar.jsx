import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark position-fixed w-100">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center w-100">
            <Nav.Link href="#home" className='text-light px-5'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light px-5'>Store</Nav.Link>
            <Nav.Link href="#About" className='text-light px-5'>About</Nav.Link>
          </Nav>
          <Button variant="light" className='position-fixed' style={{width:"100px", right:"40px"}}>Cart {0}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;