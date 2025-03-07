"use client";

import Link from "next/link";
import React from "react";


import { useState } from "react";

import { IoClose } from "react-icons/io5";

import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
const Header = ()=>{
  const [isCartOpen, setIsCartOpen] = useState(false);


  const toggleCart = () => setIsCartOpen(!isCartOpen);

    return(
        <div className="flex ml-5">
            <header className="w-screen bg-white h-14">
              <div className="flex items-center h-30 w-screen">
                <img src="header logo.png" className="w-20 h-20 ml-20"></img>
                <h1 className="text-black pt-2 mb-1 ml-4 text-4xl font-bold">Furniro</h1>
                <div className="flex justify-items-end items-end ml-52 -mt-3 text-xl font-bold">
                  <nav className="flex space-x-10 ml-24">
                    <Link href="/" className="text-black pt-2  mt-5 text-xl hover:text-yellow-600">Home</Link>
                    <Link href="/shop" className="text-black pt-2  mt-5 text-xl hover:text-yellow-600">Shop</Link>
                    <Link href="/about" className="text-black pt-2  mt-5 text-xl hover:text-yellow-600">About</Link>
                  </nav>
                </div>
                <div className="flex space-x-12 ml-80 mt-6">
                  <MdAccountCircle className="text-black text-2xl" />
                  <FaSearch className="text-black text-2xl" />
                  <FaHeart className="text-black text-2xl" />
                  
                  <FaShoppingCart onClick={toggleCart} className="text-black text-2xl cursor-pointer hover:text-yellow-600" />
                  
                </div>
              </div>
            </header>

            
      <div
        className={`fixed top-0 right-0 h-[550px] bg-white shadow-lg w-80 transition-transform transform z-20 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="py-8 px-4 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold">Shopping Cart</h2>
          <button onClick={toggleCart}>
            <IoClose className="rounded-full hover:bg-slate-600 hover:text-white" size={24} />
          </button>
        </div>

        
        <div className="p-4 space-y-4 h-[300px]">
          
          <div className="flex items-center space-x-8">
            <img src="sofa1.png" className="w-16 h-16 rounded-lg"></img>
            <div>
              <h3 className="text-md font-semibold">Asgaard Sofa</h3>
              <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
            </div>
            <IoClose size={18} className="ml-[200px]  text-white rounded-full bg-gray-500"></IoClose>

          </div>

        
        <div className="flex items-center space-x-8">
            <img src="sofa6.jpg" className="w-16 h-16 rounded-lg"></img>
            <div>
              <h3 className="text-md font-semibold">Asgaard Sofa</h3>
              <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
            </div>
            <IoClose size={18} className="ml-[200px]  text-white rounded-full bg-gray-500"></IoClose>
          </div>

        </div>

        
        <div className="p-4 border-t">
          <div className="flex space-x-4">
          <h3 className="text-lg font-bold text-black">Subtotal :</h3>
          <h3 className="text-lg font-bold text-yellow-600">Rs. 250,000.00</h3>
          </div>
          <div className="mt-4 flex space-x-2">
              <Link href="/cart">
              <button className="px-11 py-2 border border-black text-black rounded-full">Cart</button>
              </Link>
              <Link href="/checkout">
              <button className="px-11 py-2 border border-black text-black rounded-full">Checkout</button>
              </Link>
          </div>
        </div>
      </div>

      
      {isCartOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}
    
            </div>

    );

};

export default Header;