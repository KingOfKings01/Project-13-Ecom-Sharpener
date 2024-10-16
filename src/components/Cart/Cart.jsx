import { Button, Col, Container, Row } from "react-bootstrap";
import cartElements from "../../assets/cart";

export default function Cart() {
    return (
        <>
            <h2>Cart</h2>
            <Container>
                <h2 className="text-center my-4">Cart</h2>
                <Row className="justify-content-center">
                    {cartElements.map((product, index) => (
                        <Col key={index} xs={12} md={6} lg={6} className="d-flex flex-column align-items-center mb-4">
                            <h4 className="text-center">{product.title}</h4>
                            <img src={product.imageUrl} alt={product.title} className="img-fluid" />
                            <div className="d-flex justify-content-between w-50  align-items-center mt-2">
                                <span>${product.price}</span>
                                <Button variant="info" className="text-light">Remove</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
