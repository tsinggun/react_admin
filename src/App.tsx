import React , { Fragment , Suspense, useEffect}from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
// import RouterBeforeEach from '@/Components/RouterBeforeEach/RouterBeforeEach'

export default function App() {



  return (
    <div>
      {/* <span>1</span> */}
      {/* <Link to={'/home'}>home</Link> */}
      {/* <Link to={'/login'}>login</Link> */}
      {/* <RouterBeforeEach/> */}
      <Suspense>
        {useRoutes(routes)}
      </Suspense>
    </div>
  )
}
