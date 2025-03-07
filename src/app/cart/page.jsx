import Perks from "../components/perks";
import Link from "next/link";

function cart(){
    return (
        <>

        <div className="mt-[120px] ml-[180px] space-y-4">
            <h1 className="text-5xl font-bold">Cart</h1>
            <p className="text-xl">Home&gt;Cart</p>
        </div>

        <div className="flex h-[200px] ">
            <div className="flex items-center justify-center w-[1000px] h-[55px] bg-orange-100 text-2xl font-bold space-x-32 mt-[70px] ml-[170px] px-[150px]">
                <h1>Product </h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>SubTotal</h1>
            </div>
            <div className=" w-[393px] h-[390px] bg-orange-100 ml-[30px] mt-[70px]">
                <h1 className="mt-[30px] text-2xl font-bold ml-[100px]">Cart Totals</h1>
                <div className="flex space-x-12 mt-[30px] justify-center">
                    <p>Subtotal : </p>
                    <p className="text-gray-500 font-bold">Rs. 250,000.00</p>
                </div>
                <div className="flex space-x-12 mt-[30px] justify-center">
                    <p>Total : </p>
                    <p className="text-xl font-bold text-yellow-600">Rs. 250,000.00</p>
                </div>
                <div className="flex items-center justify-center">
                <Link href="/checkout">
                <div className="w-[160px] h-[60px] border border-black px-11 py-4 mt-[30px] rounded-lg">Checkout</div>
                </Link>
                </div>
            </div>
        </div>

        <div className="h-[500px] ml-[90px]">
            <div className="flex space-x-32 ml-[10px]">
            <img className="w-[70px] h-[70px]  bg-orange-100 rounded-lg" src="sofa1.png"></img>
            <div className="flex mt-[20px] space-x-32">
            <p>Asgaard Sofa</p>
            <p>Rs. 250,000.00</p>
            <button className="w-[40px] h-[40px] rounded-lg px-2  border border-r-gray-600  ">1</button>
            <p>Rs. 250,000.00</p>
            </div>

            </div>
        </div>

        <Perks></Perks>


        </>
    )

};
export default cart;