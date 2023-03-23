import React , {Suspense,}from 'react'
import {  useRoutes } from 'react-router-dom'
import routes from './router'
// import RouterBeforeEach from '@/Components/RouterBeforeEach/RouterBeforeEach'

export default function App() {
  return (
      <Suspense>
        {useRoutes(routes)}
      </Suspense>
  )
}
