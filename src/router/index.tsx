import React ,  { lazy }from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'


const Login = lazy( () => import('@/views/Login/Login') )
const LayOut = lazy( () => import('@/views/LayOut/Layout'))

const routes: RouteObject [] = [
    {
        path:'/',
        element: <Navigate to={'/home'}/>
    },
    {
        path:'/home',
        element: <LayOut/>
    },
    {
        path: 'login',
        element: <Login/>
    }
]

export default routes