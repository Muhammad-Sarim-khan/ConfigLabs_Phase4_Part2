import React from "react";





const ProductCard = ({image, title, description, price }) => {
  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-[285px] h-[446px] cursor-pointer">
      
      <div className="h-3/4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="p-4 h-1/4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <span className="text-xl font-bold text-gray-900">{price}</span>
      </div>
    </div>
    

    </>
  );
};

export default ProductCard;
