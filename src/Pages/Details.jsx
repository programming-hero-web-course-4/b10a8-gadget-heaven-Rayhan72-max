import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Cart from "../Components/Cart";
import { useContext, useState } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";


const Details = (props) => {
    const {cartProduct,setCartProduct,setWishProduct,wishProduct} = useContext(Authcontext)
    const products = useLoaderData();
    
    
    
    const handleCart=(newProduct)=>{
        setCartProduct([...cartProduct,newProduct])
        toast.success("Added to Cart")    
    }

    const handleWish= (newProduct)=>{
        document.getElementById("wish").disabled = true;
        for(let a of wishProduct){
            if (a.product_id === product_id){
                return toast.warn("Product Exist")
            }
        }
        
        setWishProduct([...wishProduct,newProduct])
        
        toast.success("Added to WishList")
    }
    
    const id = useParams();
    const intId = parseInt(id.id);
    
    const newProduct = products.find(p => p.product_id == id.id)
    const { product_id,product_title, Specification, price, description, availability, rating, category, product_image } = newProduct;
    




    return (
        <div>
            <Helmet>
                  <title>Details</title>
                </Helmet>
            <div className="bg-purple-500 text-center pb-60">
                <h1 className="mb-5 text-5xl font-bold">Product Details</h1>
                <p className="mb-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-base-200 w-fit mx-auto relative z-10 -mt-36 rounded-lg p-4">
                <div className="flex flex-col gap-2 lg:flex-row">
                    <img
                        src={product_image}
                        class="rounded-lg w-fit shadow-2xl" />
                    <div className="text-left">
                        <h1 className="text-5xl font-bold mb-2">{product_title}</h1>
                        <h1 className="text-2xl font-bold mb-2">Price:{price}</h1>
                        <h1 className="btn btn-outline btn-primary mb-2">{availability}</h1>
                        <h1 className="mb-2 font-light">{description}</h1>
                        <h1 className="text-2xl font-bold mb-2">Specification:</h1>
                        
                        <ol className="font-light">
                            {Specification.map((s,index)=><li key={index}>{index+1}. {s}</li>)}
                        </ol>
                        <h1 className="text-2xl font-bold mb-2">Rating</h1>
                        <div className="flex flex-row  gap-2">
                        <div className="rating rating-lg rating-half mb-2">
                            <input type="radio" name="rating-11" className="rating-hidden" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="1.5 star"  />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star"  defaultChecked/>
                            <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" />
                           
                        </div> <div><h1 className="text-xl">{rating}</h1> </div>
                        </div>
                

                        <div className="flex flex-row gap-2 items-center">
                        <button onClick={()=>handleCart(newProduct)} className="btn btn-primary">Add to Cart</button>
                        <ToastContainer position="top-center" autoClose={500}/>
                        <button id="wish" onClick={()=>handleWish(newProduct)} className="btn text-2xl"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;