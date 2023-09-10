"use client"
import react,{useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from "axios";
import toast ,{ Toaster } from "react-hot-toast";


function SignUpPage() {
    const router=useRouter()
   
    const [user,setUser]=useState({
        email:"",
        password:"",
        username:"",
    })
    const [loading, setLoading]=useState(false)


    const onSignup= async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const response =await axios.post("/api/users/signup",user)
            toast.success('Successfully created!');
            console.log("SignUp SUCCESS" )
            router.push("/login");
        } catch (error:any) {
            toast.error('This is an error!');
            toast.error(error.message);
            console.log("Signup failed", error.message);
        }finally{
            setLoading(false)
        }
        
    }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
        <h1>{loading ? "Processing..." : "Signup"}</h1>
        <hr />
    <form onSubmit={onSignup} className="w-1/2 ">
        <label htmlFor="">
            <span>Username:</span>
            <input type="text" 
            required
            onChange={(e)=>setUser({...user,username:e.target.value})} 
            value={user.username}/>
        </label>
        <label htmlFor="">
            <span>Email:</span>
            <input type="text" 
            required
            onChange={(e)=>setUser({...user,email:e.target.value})}
            value={user.email}/>
        </label>
        <label htmlFor="">
            <span>Password:</span>
            <input type="password" 
            required
            onChange={(e)=>setUser({...user,password:e.target.value})}
            value={user.password}/>
        </label>
        <button className='btn-primary'>SignUp</button>
        
              <Link href="/login">Visit Login page</Link>
              
    </form>
    <Toaster />
    </main>
  )
}

export default SignUpPage