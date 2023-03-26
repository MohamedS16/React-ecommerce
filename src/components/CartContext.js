import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

const getdefaultcart = ()=>{
    let cart = {}
    for(let i = 1;i<21;i++){
        cart[i] = 0;
    }
    return cart;
}

export const CartContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getdefaultcart)

    const addToCart = (itemid) =>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }

    const RemoveFromCart = (itemid) =>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const Deleteitem = (itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:0}))
    }

    console.log(cartItems)
    const contextValues = {cartItems,addToCart,RemoveFromCart,Deleteitem}
    return (
        <CartContext.Provider value={contextValues}>
            {props.children}
        </CartContext.Provider>
    )
}
