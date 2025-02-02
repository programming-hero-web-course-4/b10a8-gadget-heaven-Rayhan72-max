import React, { useContext, useState } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Cart = ({ product }) => {
    const navigate = useNavigate();

    const { cartProduct,setCartProduct } = useContext(Authcontext);
    const totalPrice = cartProduct.reduce((total, product) => total + product.price, 0);
    const fixPrice = totalPrice.toFixed(2);

    const [price,setPrice] = useState(fixPrice)

    const handleSort = () => {
        cartProduct.sort((a, b) => b.price - a.price)
    }

    const handlePurchase = () => {
        document.getElementById("my_modal_1").showModal();
        setPrice(0);
        setCartProduct([]);
    }
    const handleClose=()=>{
    navigate("/")
    }


    return (
        <div>
            
            <div className='flex flex-row justify-between'>
                <h1 className='text-xl text-bold'>Cart</h1>
                <div className='flex flex-row gap-2 items-center'>
                    <h1>Total:{price}</h1>
                    <button onClick={handleSort} className='btn btn-outline' >Sort by Price</button>
                    {/* Modal Here */}
                    {
                        cartProduct.length === 0 ? <button className="btn btn-outline" onClick={handlePurchase} disabled>Purchase</button> :
                        <button className="btn" onClick={handlePurchase}>Purchase</button>
                    }
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Congratulations!</h3>
                            <p className="py-4">Purchased Success</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={handleClose} className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                   
                </div>
            </div>
            {
                cartProduct.map(p =>
                    <>

                        <div className="bg-base-100 w-full shadow-sm flex flex-row gap-4 items-center">
                            <figure>
                                <img
                                    
                                    src={p.product_image}
                                    alt="Shoes" width={150} className='h-20 rounded-lg p-2 mb-8' />
                            </figure>
                            <div>
                                <h2 className="card-title">{p.product_title}</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <h1 className='font-bold text-left'>Price:{p.price}</h1>
                            </div>
                        </div>
                    </>
                )}

        </div>
    );
};

export default Cart;