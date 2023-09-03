import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Not Found Ticket</h2>
      <p>Could not find requested Ticke </p>
      <Link href="/tickets">Return Home</Link>
    </main>
  )
}