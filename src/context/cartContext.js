import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let CartContext = createContext()
let headers = {
    token: localStorage.getItem("userToken")
}

function getCart() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers
    }).then((res) => res)
}

export default function CartContextProvider(props) {
    const [cartCount, setCartCount] = useState(() => {
        const localCartCount = localStorage.getItem("cartCount");
        return localCartCount ? parseInt(localCartCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("cartCount", cartCount.toString());
    }, [cartCount]);

    // add to cart function
    const addToCart = async (id) => {
        try {
            const res = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart",
                { productId: id },
                { headers }
            );
            updateCounter(res.data.numOfCartItems);
            return res;
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    // delete item from cart function 
    const deleteProductFromCart = async (id) => {
        try {
            const res = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
                { headers }
            );
            updateCounter(res.data.numOfCartItems);
            return res;
        } catch (error) {
            console.error("Error deleting from cart:", error);
        }
    };


    // update product quantity function
    const updateProductQuantity = async (id, quantity) => {
        try {
            const res = await axios.put(
                `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
                { count: quantity },
                { headers }
            );
            updateCounter(res.data.numOfCartItems);
            return res;
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };


    const updateCounter = (count) => {
        setCartCount(count);
        localStorage.setItem("cartCount", count.toString());
    };


    const contextValue = {
        addToCart,
        getCart,
        deleteProductFromCart,
        updateProductQuantity,
        cartCount,
        setCartCount
    };

    return <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
}
