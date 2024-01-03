import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext()
let headers = {
    token: localStorage.getItem("userToken")
}

function addToCart(id) {
    return axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
        productId: id
    }, { headers }).then((res) => res)
}


function getCart() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers
    }).then((res) => res)
}

function deleteProductFromCart(id) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers
    }).then((res) => res)
}

function updateProductQuantity(id, quantity) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { "count": quantity }, {
        headers
    }).then((res) => res)
}


export default function CartContextProvider(props) {

    return <CartContext.Provider value={{ addToCart, getCart, deleteProductFromCart, updateProductQuantity }}>
        {props.children}
    </CartContext.Provider>
}