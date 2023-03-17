import React, {useEffect} from 'react'
import { useLocation , useNavigate} from 'react-router-dom'

export default function RouterBeforeEach() {

    const pathname: string = useLocation().pathname
    const navigate = useNavigate()

    useEffect(() => {
        if(pathname.includes('/home')){
            console.log(pathname);
            navigate('/login')
        }
     
    }, [pathname])
    

  return (
    <div>RouterBeforeEach</div>
  )
}
