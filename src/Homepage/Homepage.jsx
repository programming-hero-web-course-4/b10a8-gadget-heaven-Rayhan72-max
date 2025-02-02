import React from 'react';
import Banner from '../Components/Banner';
import Gadgets from '../Components/Gadgets';
import { Outlet } from 'react-router-dom';


const Homepage = (props) => {
    return (
        <div>
            <Banner />
            <div className='mt-10'>
                <Gadgets />
            </div>
        </div>
    );
};

export default Homepage;