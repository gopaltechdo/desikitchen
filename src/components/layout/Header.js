import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header  ()  {
  return (
<>

<header className='flex items-center justify-between'>


<nav className='flex  items-center gap-8'> 
<Link className='text-primary font-semibold text-2xl ' href='/'> 
<Image src="/desi.jpg" width={200} height={100} />
</Link>
<Link href="/">Home</Link>
<Link href="">Menu</Link>
<Link href="">About</Link>
<Link href="">Contact</Link>
<Link href="" className='bg-primary rounded-full text-white px-6 py-2'>Profile</Link>
</nav>
<nav className='flex-item-center gap-4 text-grey-500 font-semibold'>
<Link href={'/login'} className='px-8 py-2 text-white bg-green-800 rounded-full'>Login</Link>

  <Link href={'/register'} className='bg-primary rounded-full text-white px-8 py-2'>Register</Link>

</nav>
</header>

</> 
 )
}

