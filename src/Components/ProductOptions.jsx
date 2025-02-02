import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { useParams } from 'react-router-dom';

const ProductOptions = () => {
    const [product,setProduct] = useState([]);
    
    const location = useParams();
    
    

    useEffect(()=>{
        fetch("./gadgets.json")
        .then(res => res.json())
        .then(data=> setProduct(data))
    },[])
    
    
    const newProducts = product.filter(p=>p.category === location.category)
    console.log(newProducts)

    return (
        <div className='grid grid-cols-3 gap-1'>
            
            {location.category? newProducts.map((product) =><Cards product={product} />):
             product.map((product) =><Cards product={product} />)}
            
        </div>
    );
};

export default ProductOptions;