import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>This is I1 page <Link href={`/i1/i2`}>I2  </Link>
    
    | <Link href={`/i3`}>I3</Link>
    | <Link href={`/i4`}>I4</Link>

    </div>

  )
}

export default page