"use client"

import React from 'react'

import { UserButton } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import {useRouter} from 'next/navigation'

const ProfileButton = () => {
    const router = useRouter()
  return (
    <div>
      <UserButton.Action
       label='See Orders' 
       labelIcon={<ShoppingBag/>} 
       onClick={()=>router.push('/orders')}
       />  
    </div>
  )
}

export default ProfileButton
