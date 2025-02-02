
const Footer = (props) => {
    return (
        <div className='mt-4 bg-white pt-16 border-t-2 border-black'>
        <h1 className="font-bold text-4xl text-center ">Gadget Heaven</h1>
        <p className="text-gray-400">Leading the way in cutting-edge technology and innovation.</p>
        <footer className="text-white flex flex-col  justify-between p-8 lg:grid grid-cols-3 gap-2 "> 
        <div>
            <h1 className=" font-bold flex gap-2 items-center text-xl"><img src="./images/logo.webp" alt=""/>About Us</h1>
            <div className="mt-4 text-gray-400 text-left">
                <p>Location: av. Washington 165, NY CA </p>
                <p>54003</p>
                <p>Phone 45123000</p>
                <p>Email: info@yourdomain.com</p>
                <p>Openings hours: 9.00 AM - 5.00 PM</p>
            </div>
        </div>
        <div>
            <h1 className="mb-2 font-bold flex gap-2 items-center text-xl">Quick Links</h1>
            <div className="text-gray-400 text-left">
            <p>Home</p>
            <p>About</p>'
            '
            <p>Contact</p>
            </div>
        </div>
        <div>
            <h1 className=" font-bold flex gap-2 items-center text-xl">Subscribe</h1>
            <p className="text-gray-400 text-left">Subscribe to our newsletter for the latest updates.</p>
            <div className='text-left mt-2'>
            <input type="text" placeholder="Enter your name" className="mt-2 bg-zinc-800 p-2 rounded-l-lg"/>
            <button className="mt-2 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg">Subscribe</button>
            </div>
        </div>
     </footer>
     
     <div>
            <p className="text-center text-gray-400 border-t p-2">© 2021 Your Company. All rights reserved.</p>
     </div>
        </div>
    );
};

export default Footer;