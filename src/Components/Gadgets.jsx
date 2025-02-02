import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router';
import ProductOptions from './ProductOptions';

const Gadgets = (props) => {

    

    
    
    /* const [newProduct,setNewProduct] = useState([])    

    const handleCategory=(e) =>{
        const products = product.filter(p=>p.category === e)
        setNewProduct(products);
    } */
    return (
        <div>
            
            <h1 className='text-2xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-5'>
                <div className='text-2xl col-span-1 flex flex-col gap-4 shadow-lg h-fit p-2 mr-2'>
                    <Link to={"/"}><button  className='bg-purple-500 p-2 rounded-lg w-full'>All Product</button></Link>
                    <Link to={"/categories/Laptops"}><button  className='bg-purple-500 p-2 rounded-lg w-full'>Laptops</button></Link>
                    <Link to={"/categories/Phones"}><button  className='bg-purple-500 p-2 rounded-lg w-full'>Phones</button></Link> 
                    <Link to={"/categories/Smart Watches"}><button  className='bg-purple-500 p-2 rounded-lg w-full'>Smart Watches</button></Link>
                </div>
                <div className='col-span-4'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Gadgets;