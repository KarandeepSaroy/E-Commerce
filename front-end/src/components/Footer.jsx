// import React from 'react'
// import { assets } from '../assets/frontend_assets/assets'

// const Footer = () => {
//     return (
        
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//             <div>
//                 <img className='mb-5 w-32' src={assets.logo} alt="" />
//                 <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis, nemo voluptatibus dignissimos amet ipsam quibusdam minus reprehenderit ut. Laboriosam culpa iste cupiditate quae.</p>
//             </div>
                
//                 <div>
//                     <p className='text-xl font-medium mb-5'>COMPANY</p>
//                     <ul className='flex flex-col gap-1 text-gray-600'>
//                         <li>Home</li>
//                         <li>About Us</li>
//                         <li>Delivery</li>
//                         <li>Privacy Policy</li>
//                     </ul>
                    
//                 </div>
                
//                 <div>
//                     <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//                     <ul className='flex flex-col gap-1 text-gray-600'>
//                         <li>+1 -212-456-789</li>
//                         <li>contact@foreveryou.com</li>
//                     </ul>
//                 </div>

//                 <div>
//                     <hr />
//                     <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
//                 </div>
              
//         </div>
      
//     </div>
//     )
// }

// export default Footer

import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 mt-40">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
          
          {/* Logo & About */}
          <section>
            <img className="mb-5 w-32" src={assets.logo} alt="Forever Logo" />
            <p className="w-full md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              perferendis, nemo voluptatibus dignissimos amet ipsam quibusdam
              minus reprehenderit ut. Laboriosam culpa iste cupiditate quae.
            </p>
          </section>

          {/* Company Links */}
          <section>
            <h2 className="text-xl font-medium mb-5">COMPANY</h2>
            <ul className="flex flex-col gap-1">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Delivery</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </section>

          {/* Contact Info */}
          <section>
            <h2 className="text-xl font-medium mb-5">GET IN TOUCH</h2>
            <ul className="flex flex-col gap-1">
              <li>+1 - 212 - 456 - 789</li>
              <li>contact@foreveryou.com</li>
            </ul>
          </section>
        </div>

        {/* Divider & Copyright */}
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 forever.com — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
