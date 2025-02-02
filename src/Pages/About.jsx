import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = (props) => {
    return (
        <div>
            <Helmet>
                  <title>About</title>
                </Helmet>
            <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
            <p>
            Welcome to Gadget Heaven, your one-stop destination for the latest and most innovative tech gadgets! Founded in 2018, we are committed to bringing cutting-edge technology to gadget lovers, tech enthusiasts, and everyday users.
 
            At Gadget Heaven, we believe technology should be exciting, accessible, and enhance your everyday life. Our carefully curated collection features smartphones, laptops, smartwatches, gaming accessories, and more—all from the world’s most trusted brands.
            </p>
        </div>
    );
};

export default About;