import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CartItem from "../../Components/CartItem/CartItem";
import Password from "../../Assets/Password";
import im1 from "../../Images/image 14.png";
function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-[600px] flex justify-center mt-[100px]">
        <div className="w-[80%]  min-h-[600px]">
          <div className="font-semibold  w-[20%] mb-[30px]">
            <h3 className="text-[25px] text-[#333333]">Shop cart</h3>
          </div>
          <div className="h-[80%]">
            <div className="hidden mx-auto h-[40px] mt-[50px] ">
              <span className="text-[#808080] text-[16px]">
                No product found in shop cart
              </span>
            </div>

            {/* Shopping card container */}
           <div className="flex w-full">
            <div className="w-[80%]">
              <CartItem image={im1}/>
              <CartItem image={im1}/>
              <CartItem image={im1}/>
              <CartItem image={im1}/>
            </div>
           
            {/* Checkout button and  price */}
            <div className="w-[30%] h-[300px]  justify-center">

 
              <div className="w-full text-left mt-10">
                <span className="pl-5">Enter promo code</span>
              </div>
              <div className="flex h-[40px]  mb-8 ">
                <input type="text" name="" placeholder="Promo Code" className="border-2 border-gray-400 ml-auto h-[100%] w-[55%]"/>
                <button className="bg-black text-white mr-auto h-[100%] w-[150px]">Submit</button>
              </div>
              <div className="flex">
               <div className="w-[50%] text-left"><span className="pl-2">Shipping cost</span></div> 
               <div className="w-[50%] text-right"><span className="pr-2">TBD</span></div> 
              </div>
              <div className="flex">
               <div className="w-[50%] text-left"><span className="pl-2">Discount</span></div> 
               <div className="w-[50%] text-right"><span className="pr-2">-$0</span></div> 
              </div>
              <div className="flex">
               <div className="w-[50%] text-left"><span className="pl-2">Tax</span></div> 
               <div className="w-[50%] text-right"><span className="pr-2">TBD</span></div> 
              </div>
              <div className="flex mb-5">
               <div className="w-[50%] text-left"><span className="pl-2 font-semibold">Total</span></div> 
               <div className="w-[50%] text-right"><span className="pr-2 font-semibold">$39.99</span></div> 
              </div>
              <button className="bg-black text-white  w-[200px] h-[50px] flex items-center mx-auto justify-center hover:bg-yellow-500"><Password /><span className="pl-2">Checkout</span></button>

            </div>

           </div>
           



         
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;