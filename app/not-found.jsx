import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Not Found</h2>
      <p>Could not find requested Page</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}