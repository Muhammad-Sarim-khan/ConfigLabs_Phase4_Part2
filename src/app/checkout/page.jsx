import Perks from "../components/perks";

function Checkout(){
    return(
        <>

        <div className="w-[233px] h-[96px] mt-[135px] ml-[175px] font-bold">
            <h1 className="text-5xl ">Checkout</h1>
            <p>Home &gt; Checkout</p>
        </div>

        <div className="w-[1440px] h-[1450px] ">
            <div className="w-[1242px] h-[1714px]  ml-[100px]">
                <div className="w-[608px] h-[1714px] mt-[100px]  ml-[80px] space-y-6">
                    <h1 className="w-[245px] h-[54px]  text-4xl font-bold">Billing Details</h1>


            
                <div className="flex space-x-6 py-6 font-bold">
                    <div className="space-y-6">
                    <p>First Name</p>
                    <input className="w-[150px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                    <p>Last Name</p>
                    <input className="w-[150px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    
                </div>
                <div className="space-y-6">
                        <p>Company Name (Optional)</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                <div className="space-y-6">
                        <p>Country / Region</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                </div >
                <div className="space-y-6">
                        <p>Street address</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                        <p>Town / City</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                        <p>Province</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                        <p>Zip Code</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                        <p>Phone</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    <div className="space-y-6">
                        <p>Email Address</p>
                        <input className="w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>
                    
                    <div className="space-y-6 ">
                    
                        <input placeholder="Additional Information" className=" mt-[20px] w-[200px] h-[50px] border border-gray-400 rounded-lg" type="text" />
                    </div>

                </div>

            </div>

        </div>
        <Perks></Perks>


        </>
    )
};

export default Checkout;