import { useLocation, useNavigate } from 'react-router-dom'
import type { NavigateFunction } from 'react-router-dom'

export default function useRouterForeach(){
    // const location = 
    const  pathname: string  = useLocation().pathname
    const navigate: NavigateFunction = useNavigate()
    navigate('/login')

    // console.log(pathname);
    if(pathname.includes('/home')){
        const token = localStorage.getItem('token')
        if(!token){
            // alert("no_token")
            navigate('/login', {replace: true})
        }
    }
}