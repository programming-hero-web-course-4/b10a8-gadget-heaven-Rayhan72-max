import React from 'react';
import Heading from '../Components/Heading';
import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = (props) => {
    return (
        <div>
   <Helmet>
         <title>DashBoard</title>
       </Helmet>
        <div  className="bg-purple-500 text-center p-12">
        <Heading title={"Dashboard"} psg={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}/>
        <Link to={"/dashboard/cart"}><button className='btn btn-outline btn-primary text-white mr-2'>Cart</button></Link>
        <Link to={"/dashboard/wishList"}><button className='btn btn-outline btn-primary text-white'>WishList</button></Link>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Dashboard;