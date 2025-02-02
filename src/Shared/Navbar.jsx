import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


const Navbar = (props) => {

    const location = useLocation();
    const isHome = location.pathname;
    console.log("pathname is ",location.pathname);

    const routes = [
        {id:1, name: 'Home', path: '/'},
        {id:2, name: 'Statistics', path: '/statistics'},
        {id:3, name: 'Dashboard', path: '/dashboard'},
        {id:4, name: 'About', path: '/about'}
    ]

    return (
        <div>
            <div className={ isHome === "/"?"navbar bg-purple-600 overlay text-white border-b border-indigo-800 rounded-t-lg": "navbar bg-base-500"}>
            
                <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {routes.map(route => <Link to={route.path} className='mr-6'><a>{route.name}</a></Link> )}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"><FaCartArrowDown /></a>
                    <a className="btn ml-4"><FaHeart /></a>
                </div>
            </div>
            </div>
        
    );
};

export default Navbar;