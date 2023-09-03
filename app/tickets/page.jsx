import React from 'react'
import { Suspense } from 'react'
import Loading from '../loading'
import TicketList from './TicketList'
import Link from 'next/link'

function ticket() {
  return (
    <main>
        <nav className='flex justify-between space-x-4'>
            <div>
                <h2>Tickets</h2>
                <p><small>currently open Tickets</small></p>
            </div>
            <div className=''>
            <button class="btn-primary">
              <Link href="/tickets/create">Create</Link>
              </button>
            </div>
        </nav>
        <Suspense fallback={<Loading/>}>
        <TicketList/>
        </Suspense>
       
    </main>
   
  )
}

export default ticket