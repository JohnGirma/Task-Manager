"use client"
import react,{useState} from 'react'
import { useRouter } from 'next/navigation'
import toast ,{ Toaster } from "react-hot-toast";
import Link from 'next/link'
import axios from 'axios';


function LoginPage() {
    const router=useRouter()
    const [loading, setLoading]=useState(false)
    const [user,setUser]=useState({
        email:"",
        password:"",
      
    })


    const onLogin= async()=>{
        
        try {
            setLoading(true)
            const response =await axios.post("/api/users/login",user)
            // let data=await response.json()
            // console.log("data",data)
            // toast.success('Logged in Successfully !');
            // console.log("Login SUCCESS" ,response.json())
            router.push('/');
        } catch (error) {
            toast.error('This is an error!');
            toast.error(error);
            console.log("Login failed", error.message);
        }finally{
            toast.success('Logged in Successfully !');
            console.log("Login SUCCESS" ,response.json())
            setLoading(false)
        }
        
    }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr />

    <form onSubmit={onLogin} className="w-1/2 "> 
        <label >
            <span>Email:</span>
            <input type="text" 
            required
            id="email"
            onChange={(e)=>setUser({...user,email:e.target.value})}
            value={user.email}/>
        </label>
        <label >
            <span>Password:</span>
            <input type="password" 
            required
            id="password"
            onChange={(e)=>setUser({...user,password:e.target.value})}
            value={user.password}/>
        </label>
        <button className='btn-primary' type='submit'>Login</button>
        
              <Link href="/signup">Create account</Link>
      
    </form>

    </main>
  )
}

export default LoginPage