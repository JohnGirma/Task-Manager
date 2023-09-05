import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

function NavBar() {
  return (
    <nav>
        <Image
            src={Logo}
            alt='logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
        <h1>hi john</h1>
        <div className='flex items-center gap-5 ml-20'>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">
          <button className="btn-primary">Signup</button>
        </Link>
        </div>

    </nav>
  )
}

export default NavBar