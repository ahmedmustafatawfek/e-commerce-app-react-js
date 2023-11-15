import { createContext } from "react";


 export let cartContext = createContext()

 function addToCart(){
    console.log("added to cart");
 }

export default function cartContextProvider(props){

    return <cartContext.Provider value={addToCart}>
        {props.children}
    </cartContext.Provider>
}