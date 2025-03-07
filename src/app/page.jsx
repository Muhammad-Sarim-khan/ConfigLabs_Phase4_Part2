import React from "react";
import Link from "next/link";

import ProductCard from "./components/card";

export default function Home() {
  const products = [
    {
      id:1,
      image: "card1.png",
      title: "Product 1",
      description: "This is a description for Product 1.",
      price: "$49.99",
    },
    {
      id:2,
      image: "card2.png",
      title: "Product 2",
      description: "This is a description for Product 2.",
      price: "$59.99",
    },
    {
      id:3,
      image: "card3.jpeg",
      title: "Product 3",
      description: "This is a description for Product 3.",
      price: "$69.99",
    },
    {
      id:4,
      image: "card4.png",
      title: "Product 4",
      description: "This is a description for Product 4.",
      price: "$69.99",
    },
    {
      id:5,
      image: "card5.png",
      title: "Product 5",
      description: "This is a description for Product 5.",
      price: "$69.99",
    },
    {
      id:6,
      image: "card6.jpeg",
      title: "Product 6",
      description: "This is a description for Product 6.",
      price: "$69.99",
    },
    {
      id:7,
      image: "card7.jpeg",
      title: "Product 7",
      description: "This is a description for Product 7.",
      price: "$69.99",
    },
    {
      id:8,
      image: "card8.png",
      title: "Product 8",
      description: "This is a description for Product 8.",
      price: "$69.99",
    },
  ];
  return (
    <>
    
    <div className="relative">
      <img src="background1.jpeg" className="h-[850] w-screen mt-10" ></img>
      <div className="absolute inset-0 flex h-[500] w-[650] bg-orange-100 mt-[80] ml-[750] rounded-lg">
        <div className="ml-[40px] mt-[40px] mr-[40px]">
        <div className="space-y-6 ">
          <h1 className="text-2xl">New Arrival</h1>
          <h1 className="text-6xl font-bold text-yellow-600 ">Discover our new collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link href="/shop">
          <div className="flex items-center justify-center mt-[30px]  bg-yellow-600 w-[210px] h-[100px] ">
          
          <button className=" text-white">BUY NOW</button>
          </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      
      <h1 className=" w-screen leading-none ml-[600px] mt-[80px] text-4xl font-bold">Browse The Range</h1>
      <p className=" w-screen leading-none ml-[570px] mt-[30px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      
      <div className="absolute space-x-12 flex mt-[40px] ml-[270]">
        <img src="background2.png" className="w-[300] h-[400] rounded-lg " ></img>
        <img src="background3.png" className="w-[300] h-[400] rounded-lg" ></img>
        <img src="background4.png" className="w-[300] h-[400] rounded-lg" ></img>

        
      </div>
      <div className="flex space-x-64 mt-[500] text-2xl font-bold ml-[370px] text-gray-600">
        <h2>Dining</h2>
        <h2>Living</h2>
        <h2>Bedroom</h2>
      </div>
    </div>
    <div className="flex items-center justify-center text-4xl font-bold mt-[100px]">
      <h1>Our Products</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-16 px-4 mt-16 ml-[70px]">
      {products.map((product, index) => (
        <div key={product.id} className="product-card">
            <Link href="/product_description">
        <ProductCard
          key={product.id}
          products={product}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
        </Link>
        </div>
      
      ))}
    </div>

      <Link href="/shop">
    <div className="flex items-center justify-center outline outline-yellow-700 outline-2 w-[200px] h-[50px] ml-[650px] mt-20 mb-20">
        <button className="bg-white text-yellow-700">Show More</button>
    </div>
    </Link>
    <div className="flex w-screen h-[600px] bg-amber-100">
      <div className="mt-[200px] ml-[150px] w-[422px] h-[151px]">
        <h1 className=" text-4xl font-bold text-black">50+ Beautiful Rooms Inspiration</h1>
        <p className="mt-4">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <Link href="/shop">
        <button className="text-bold w-[150px] h-[40px] bg-yellow-600 text-white mt-4">Explore More</button>
        </Link>
      </div>
      <img className="w-[350px] h-[540px] ml-[40px] mt-[30px] " src="home1.png"></img>
      <div className="flex flex-col ">
        
      <img  className="w-[350px] h-[430px] ml-[10px] mt-[30px]"src="home2.png"></img>
      <div className="flex space-x-6 ml-[30px] mt-[50px]" >
      <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-yellow-600">
        <div className="w-[10px] h-[10px] rounded-full px-2 py-2 bg-yellow-500"></div>
      </div>
      <div className="flex items-center justify-center space-x-6">
      <div className="w-[10px] h-[10px] rounded-full bg-gray-500"></div>
      <div className="w-[10px] h-[10px] rounded-full bg-gray-500"></div>
      <div className="w-[10px] h-[10px] rounded-full bg-gray-500"></div>
      </div>
      </div>
      </div>
      <img  className="h-[300px] w-[200px] ml-[10px] mt-[30px]" src="home3.png"></img>
    </div>

    <div>
    <div className=" space-y-4 ml-[550px] mt-[50px]">
      <div className="w-screen h-[30px] mt-[50px] ml-[100px] text-xl font-bold text-gray-600 ">Share your setup with</div>
      <div className="w-screen h-[86px] mt-[80px] text-5xl font-bold text-gray-700">#FurniroFurniture</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[900px] w-screen space-x-2 space-y-8 mb-[400px]">
        <img src="background8.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background9.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background10.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background11.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background12.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background13.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background14.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <img src="background15.png" className="w-[260px] h-[360px] rounded-lg shadow-md"></img>
        <div>
        <img src="background16.png" className="w-[260px] h-[360px] rounded-lg shadow-md ml-[580px]"></img>
        </div>
      </div>
    </div>
    </>
    );
}

