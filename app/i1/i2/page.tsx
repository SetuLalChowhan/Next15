import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>This is i2 page <Link href={`/i1`}>I1</Link>
    | <Link href={`/i4`}>I4</Link>
    
 
    </div>

  )
}

export default page