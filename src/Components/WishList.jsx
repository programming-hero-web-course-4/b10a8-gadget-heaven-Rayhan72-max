import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';

const WishList = (props) => {
    const {wishProduct,setWishProduct} = useContext(Authcontext) 

    return (
        <div>
            <h1 className='text-xl text-bold text-left'>Wish Lists</h1>
            {wishProduct.map(p=>
            <>
                
            <div className="bg-base-100 w-full shadow-sm flex flex-row gap-4 items-center">
                <figure>
                    <img
                        src={p.product_image}
                        alt="Shoes" width={150} className='rounded-lg p-2' />
                </figure>
                <div>
                    <h2 className="card-title">{p.product_title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <h1 className='font-bold text-left'>Price:</h1>
                </div>
            </div>
            </>
            )}
        </div>
    );
};

export default WishList;
