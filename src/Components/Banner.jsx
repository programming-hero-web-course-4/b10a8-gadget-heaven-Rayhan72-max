import React from 'react';
import banner from "../assets/banner.jpg"
const Banner = (props) => {
    return (
        <div>
            <div className="hero bg-purple-600  p-16 rounded-b-lg">
                
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                        <p className="mb-5">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 mx-auto relative z-10 -mt-12 bg-[rgba(255,255,0,0.1)] shadow-lg rounded-lg p-4">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;