import React, { createContext, useState } from 'react';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {
    const [cartProduct,setCartProduct] = useState([]);
    const [wishProduct,setWishProduct] = useState([]);
    
    
    
    const productInfo = {
        cartProduct,
        setCartProduct,
        wishProduct,
        setWishProduct
    }
    
    
    return (
        <Authcontext.Provider value={productInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;