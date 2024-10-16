import productsArr from '../../assets/products';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function Products() {
  return (
    <Container>
      <h2 className="text-center my-4">Music</h2>
      <Row className="justify-content-center">
        {productsArr.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="d-flex flex-column align-items-center mb-4">
            <h4 className="text-center">{product.title}</h4>
            <img src={product.imageUrl} alt={product.title} className="img-fluid" />
            <div className="d-flex justify-content-between w-50  align-items-center mt-2">
              <span>${product.price}</span>
              <Button variant="info" className="text-light">Add to Cart</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
