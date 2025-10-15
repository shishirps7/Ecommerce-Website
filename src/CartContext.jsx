import { createContext, useState } from "react";

const CartContext = createContext();
const CartContextProvider=({children})=>{
const [cart,setcart]=useState([])
 return <CartContext.Provider value={{cart,setcart}}>
   {children}

 </CartContext.Provider>   
}
export default CartContext;
export {CartContextProvider}