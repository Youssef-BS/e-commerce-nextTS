"use client"

import { useState } from 'react';
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import {useRouter , usePathname, useSearchParams } from 'next/navigation';

import React from 'react'

const ProductInteraction = ({product , selectedSize , selectedColor} : {product : ProductType ; selectedSize : string ; selectedColor:string}) => {


    const router = useRouter() ;
    const pathName = usePathname() ;
    const searchParams = useSearchParams()
    const [quantity , setQuantity] = useState(1);


    const handleTypeChange = (type : string , value : string)=> {
       const params = new URLSearchParams(searchParams.toString());
       params.set(type , value) ; 
       router.push(`${pathName}?${params.toString()}` , {scroll : false});
    }

    const handleQuantityChange = (action : "increment" | "decrement") => {
      if(action === "increment") {
        setQuantity(prev => prev + 1);
      } else {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
      }
    }

  return (
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex flex-col gap-2 text-xs'>
        <span className='text-gray-400'>Size</span>
        <div className='flex items-center gap-2'>
             {product.sizes.map(size=>(
              <div className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300" }`} key={size}
              onClick={()=>handleTypeChange("size" , size)}
              >
                <div className={`w-6 h-5 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black "}`}>
                    {size.toUpperCase()}
                    </div>
              </div> 
        ))}
        </div>

      </div>
      <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Color</span>
        <div className='flex items-center gap-2'>
        {
          product.colors.map(color => (
             <div style={{backgroundColor : color}} className={`border-1 cursor-pointer 
              ${selectedColor === color ? "border-gray-300" : "border-white"} transition-all duration-300`}
             key={color}
             onClick={()=>handleTypeChange("color" , color)}
             >
              <div 
              className={`w-6 h-6`}
              style={{backgroundColor : color}}
              />

             </div>
          ))
        }
        </div>
      </div>
      <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Quantity</span>
        <div className='flex items-center gap-2'>
         <button onClick={()=>handleQuantityChange("decrement")} className='cursor-pointer border-1 border-gray-300 p-1'>
          <Minus className='w-4 h-4'/>
         </button>
          <span>{quantity}</span>
         <button onClick={()=>handleQuantityChange("increment")}  className='cursor-pointer border-1 border-gray-300 p-1'>
          <Plus className='w-4 h-4'/>
         </button>
        </div>
      </div>
      <button>
        <Plus />
        Add to Cart
      </button>
      <button>
        <ShoppingCart />
        Buy this Item
      </button>
    </div>
  )
}

export default ProductInteraction
