"use client"
import React from 'react'
import { Suspense } from 'react'
import Loading from '../loading'
import TicketList from './TicketList'
import Link from 'next/link'
import axios from 'axios'
import toast  from "react-hot-toast";
import { useRouter } from 'next/navigation'

function ticket() {
    const router=useRouter()
    const logout=async()=>{
        try {
          await axios.get('/api/users/logout')
          toast.success('Logout successful')
          router.push('/login')          
        } catch (error) {
            console.log(error.mesage)
            toast.error(error.mesage)
    }}
  return (
    <main>
        <nav className='flex justify-between space-x-4'>
            <div>
                <h2>Name</h2>
                <p><small>welcome</small></p>
            </div>
           
            <button className="btn-primary" 
              onClick={logout}>
              Logout
              </button>
           
        </nav>
        <Suspense fallback={<Loading/>}>
        <TicketList/>
        </Suspense>
       
    </main>
   
  )}
  

    export default ticket