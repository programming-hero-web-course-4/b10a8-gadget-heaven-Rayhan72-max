import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({product}) => {
    const {product_title, price,product_id,product_image} = product;
    
    return ( 
        <div>
            <div className="card bg-base-100 h-full shadow-sm mr-2">
                <div>
                    <img
                        className='h-40 w-full'
                        src={product_image}
                        alt="Shoes"/>
                </div>
                <div className="card-body text-left">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${product_id}`}><button className="btn btn-primary text-left">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
