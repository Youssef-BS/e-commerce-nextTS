"use client"

import PaymentForm from "@/components/PaymentForm"
import ShippingForm from "@/components/ShippingForm"
import { CartItemsType } from "@/types"
import { ArrowRight, Trash2 } from "lucide-react"
import { useSearchParams , useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import Image from "next/image"



const steps = [
  {
    id : 1 ,
    title : "Shopping Cart"
  } , 
  {
    id : 2 ,
    title : "Shipping Address"
  } , 
  {
    id : 3 ,
    title : "Payment Method"

  }
]

const cartItems : CartItemsType = [
    {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity : 1 , 
    selectedSize : "m" ,
    selectedColor : "gray" ,
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity : 1 , 
    selectedSize : "m" ,
    selectedColor : "gray" ,
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity : 3 , 
    selectedSize : "l" ,
    selectedColor : "black" ,
  },
]

const CartPage = () => {

  const searchParams = useSearchParams() ; 
  const router = useRouter() ; 
  const pathName = usePathname() ; 
  const [shippingForm , setShippingForm] = useState(null) ;

  const activateStep = parseInt(searchParams.get("step") || "1") ;


  const handleChange = (value : string) => {
    const params = new URLSearchParams(searchParams);
    params.set("step" , value || "1")
    router.push(`${pathName}?${params.toString()}` , {scroll : false}) ; 
    console.log(value)
  }

  

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
       <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
       <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
         {
          steps.map(step => (
            <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activateStep ? "border-gray-800" : "border-gray-200" }`} key={step.id} onClick={() => handleChange(step.id.toString())}>
              <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activateStep ? "bg-gray-800" : "bg-gray-400" }`}>{step.id}</div>
              <p className = {`text-sm font-medium ${step.id === activateStep ? "text-gray-800" : "text-gray-400" }`}>{step.title}</p>
             </div>
          ))
         }
       </div>
       <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
        {activateStep === 1 ? (
          cartItems.map(item=> (
            <div className="flex items-center justify-between " key={item.id}>
            <div className="flex gap-8 items-center aspect-[3/1]">
              <div className="relative w-32 h-32 overflow-hidden rounded-sm">
                 <Image src={item.images[item.selectedColor]} alt={item.name} className="p-1 object-contain" fill/>
              </div>
              <div className="flex flex-col gap-1 align-center justify-between">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.selectedSize.toUpperCase()}</p>
                <p className="text-sm text-gray-500">Color: {item.selectedColor.charAt(0).toUpperCase() + item.selectedColor.slice(1)}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-s font-medium text-gray-800 mt-2">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
             
            </div>
            <button className="flex items-center justify-center text-red-600 bg-red-100 p-2 rounded-full cursor-pointer hover:bg-red-200 transition-all duration-300">
              <Trash2 className="w-4 h-4"/>
            </button>
            </div>
          ))
        ) : activateStep === 2 ? (<ShippingForm/>) : activateStep === 3 && shippingForm ? <PaymentForm /> : <p className="text-sm text-gray-500">Please fill the shipping form</p>}
        </div>
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
        <h2 className="font-semibold">Cart Details</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-medium">${
              cartItems.reduce((acc , item)=> acc + item.price * item.quantity , 0).toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Discount(10%)</p>
            <p className="font-medium">$ 10</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500">Shipping Fee</p>
            <p className="font-medium">$ 10</p>
          </div>
          <hr className="border-gray-200"/>
           <div className="flex justify-between">
            <p className="text-gray-800 font-semibold">Total</p>
            <p className="font-medium">${
              cartItems.reduce((acc , item)=> acc + item.price * item.quantity , 0).toFixed(2)}</p>
          </div>
        </div>
        {activateStep === 1 && (
        <button onClick={()=>handleChange("2")} className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 h-max">Continue 
          <ArrowRight  className="w-3 h-3"/>
        </button>
        )}

        </div>
       </div>
    </div>
  )
}

export default CartPage