import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let CartContext = createContext()
let headers = {
    token: localStorage.getItem("userToken")
}

export const handleError = (setCartCount, updatedCartCount) => {
    setCartCount(updatedCartCount);
    console.log(updatedCartCount);
    localStorage.setItem("cartCount", updatedCartCount.toString());
};

export default function CartContextProvider(props) {
    const [cartCount, setCartCount] = useState(() => {
        const localCartCount = localStorage.getItem("cartCount");
        return localCartCount ? parseInt(localCartCount) : 0;
    });

    const [cartId, setCartId] = useState(null)
    const [updatedCartCount, setUpdatedCartCount] = useState(0);


    useEffect(() => {
        localStorage.setItem("cartCount", cartCount.toString());
    }, [cartCount]);


    useEffect(() => {
        getCart();
    }, [])

    async function getCart() {
        try {
            const res = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
                headers,
            });
            if (res.data?.data?._id) {
                setCartId(res.data.data._id);
            }
            return res;
        } catch (error) {
            // console.error("Error getting cart:", error);
        }
    }


    // add to cart function
    const addToCart = async (id) => {
        try {
            const res = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart",
                { productId: id },
                { headers }
            );
            updateCounter(res.data.numOfCartItems);

            const newCartId = res.data.data?._id;
            if (newCartId) {
                setCartId(newCartId);
            }

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


    // online payment function
    const onlinePayment = async (shippingAddress) => {
        try {
            if (!cartId) {
                await getCart();
            }
            if (cartId) {
                const res = await axios.post(
                    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
                    { shippingAddress },
                    { headers }
                );
                if (res.data?.numOfCartItems) {
                    updateCounter(res.data?.numOfCartItems);
                }
                return res;
            }
        } catch (error) {
            // console.error("online payment function error:", error);
            // throw error;
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
        setCartCount,
        onlinePayment,
        cartId,
        updatedCartCount,
        setUpdatedCartCount,
    };


    return <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
}
