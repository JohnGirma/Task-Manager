import React from 'react'
import { notFound } from 'next/navigation'


export const dynamicParams=true

export async function generateStaticParams(){
    const res=await fetch(`http://localhost:3004/tickets`)
    const tickets=await res.json()

    return tickets.map((ticket)=>({
        id:ticket.id
    }))
}

async function getTicket(id){
    await new Promise((resolve, reject) => {
        setTimeout(resolve,3000)
    })
    const res=await fetch(`http://localhost:3004/tickets/`+ id,{
        next:{
            revalidate:60
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}

async function  TicketDetail({params}) {
    const ticket = await getTicket(params.id)
    // const id =params.id
  return (
    <main>
        <nav>
            <h2>Tickets Details</h2>
        </nav>
        <div  className='card  '>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority}</div>
        </div>

    
    
  
    </main>
  )
}

export default TicketDetail