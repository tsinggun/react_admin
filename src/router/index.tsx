import React ,  { lazy }from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'


const Login = lazy( () => import('@/views/Login/Login') )
const LayOut = lazy( () => import('@/views/LayOut/Layout'))
const DataBorad = lazy( () => import('@/views/DataBorad/DataBorad'))
const NotFound = () => <span>`Not Found`</span>

type Auth = {
    auth ?: boolean
}

type _RouteObject = Auth & RouteObject

const routes  = [
    {
        auth: true,
        path:'/',
        element: <Navigate to={'/home'}/>,
    },
    {
        path:'/home',
        element: <LayOut/>,
        children: [
            {
                auth: true,
                path: '/home/welcome',
                element: <DataBorad/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]

export default routes