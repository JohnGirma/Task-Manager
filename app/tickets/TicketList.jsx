import Link from 'next/link'
import React from 'react'


async function getTickets(){
    await new Promise((resolve, reject) => {
        setTimeout(resolve,3000)
    })
    const res=await fetch('http://localhost:3004/tickets',{
    next:{
        revalidate:60
    }
        })
    return res.json()
}

async function TicketList() {
    const tickets =await getTickets()
    
  return (
    <>
    <nav className='flex justify-between space-x-4'>
            <div>
                <h2>Tickets</h2>
                <p><small>currently open Tickets</small></p>
            </div>
           
            <button className="btn-secondary">
              <Link href="/tickets/create">Create</Link>
              </button>
           
        </nav>
    {tickets.map((ticket)=>(
        <div key={ticket.id} className='card my-5 '>
            <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0,200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority}</div>
            </Link>
        </div>

    ))}
    {tickets.length === 0 &&(
        <p>there is no ticket</p>
    )}
  
    </>
  )
}

export default TicketList