import { Button } from "react-bootstrap";
import { useContext } from "react";
import cartContext from "../Store/cartContext";

export default function Cart() {
    const { cartProducts,totalPrice, removeFromCart } = useContext(cartContext)
    return (
        <>
            <div className="position-fixed bg-light" style={{ right: "0", top: "55px", padding: "20px", minWidth: "300px", height: "91vh" }}>
                <h2 className="text-center">Cart</h2>
                {cartProducts?.length ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.map(product => (
                                    <tr key={product.id}>
                                        <td><img src={product.imageUrl} alt={product.title} style={{ width: "50px" }} /></td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <input type="number" value={product.quantity} style={{ width: "30px" }} />
                                        </td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                className="text-light"
                                                onClick={() => removeFromCart(product.id)}
                                            >Remove</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            <h3>Total: ${totalPrice}</h3>
                            <Button variant="info" className="text-light">Purchase</Button>
                        </div>
                    </>
                    :
                    <p>Cart is empty</p>
                }
            </div>
        </>
    )
}
