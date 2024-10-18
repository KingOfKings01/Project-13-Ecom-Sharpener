import { useState } from "react";
import cartContext from "./cartContext";

// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {

        //Todo: Check if the product is already in the cart
        const existingProduct = cartProducts.find((prod) => prod.id === product.id);
        
        if (existingProduct) {
            existingProduct.quantity++;
            setCartProducts([...cartProducts]);
            setTotalPrice(prev => prev + product.price);
            setTotal(prev => prev + 1)
            return;
        }

        const newProduct = {
            id: product.id,
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: 1
        } 

        setTotal(prev => prev + 1)
        setTotalPrice(prev => prev + product.price)
        setCartProducts([...cartProducts, newProduct]);
    }

    const removeFromCart = (productId) => {
        setCartProducts(cartProducts.filter((product) => product.id!== productId));
        const fondProduct = cartProducts.find((product) => product.id === productId)
        setTotalPrice(prev => prev - (fondProduct.price * fondProduct.quantity));
        
        setTotal(prev => prev - fondProduct.quantity);
    }

    return (
        <cartContext.Provider value={{cartProducts, totalCartItems : total, totalPrice, addToCart, removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}
