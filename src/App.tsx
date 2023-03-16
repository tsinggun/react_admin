import React , { Fragment }from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

export default function App() {
  
  return (
    <div>
        {useRoutes(routes)}
    </div>
  )
}
