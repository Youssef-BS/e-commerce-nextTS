"use client"

import { ProductType } from '@/types'
import {useRouter , usePathname } from 'next/navigation';

import React from 'react'

const ProductInteraction = ({product , selectedSize , slectedColor} : {product : ProductType ; selectedSize : string ; slectedColor:string}) => {


    const router = useRouter() ;
    const pathName = usePathname() ;


    const handleTypeChange = (type : string , value : string)=> {

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
      <div className='flex flex-col gap-2 text-sm'></div>
      <div className='flex flex-col gap-2 text-sm'></div>
    </div>
  )
}

export default ProductInteraction
