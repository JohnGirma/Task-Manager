"use client"
import react,{useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


function SignUpPage() {
    const router=useRouter()
   
    const [user,setUser]=useState({
        email:"",
        password:"",
        username:"",
    })


    const onSignup= async(e)=>{
        e.preventDefault()
        
    }

  return (
    <form onSubmit={onSignup} className="w-1/2">
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
        
              <Link href="/login">SignIn</Link>
      
    </form>
  )
}

export default SignUpPage