import React, { useEffect } from 'react'
import RouterBeforeEach from '@/Components/RouterBeforeEach/RouterBeforeEach'


export default function Layout() {

  return (
    <div>
        <h1>
            header
        </h1>

        <div>
            <RouterBeforeEach/>
        </div>
    </div>
  )
}
