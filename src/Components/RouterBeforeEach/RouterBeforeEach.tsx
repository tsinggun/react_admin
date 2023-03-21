import React, {useEffect} from 'react'
import { useLocation , useNavigate, useRoutes , Outlet} from 'react-router-dom'
import routes from '@/router'
import { useLocalStorageState } from 'ahooks';

type routesType = typeof routes
type Auth = {
  auth ?: boolean
}
type routesElement = typeof routes[0] & Auth

export default function RouterBeforeEach() {


  const [acountInfo, setAccountInfo] = useLocalStorageState<string | undefined>(
    'acountInfo',
  );
    // const pathname: string = useLocation().pathname
    const navigate = useNavigate()
    const location = useLocation()


    /**
     * @description 获取当前的路由对象
     * @param routers 
     * @param path 
     * @returns 
     */
    function findRoutes(routers: routesType, path: string){
        for(let index in routers){
            const element = routers[index]
            if(element.path == path){
              // console.log(path);
              getAuth(element)
              return
            }else{
              if(element.children){
                findRoutes(element.children, path)
              }
            }
        }
    }


    /**
     * @description 验证权限
     * @param {routesElement} element 
     */
    function getAuth(element: routesElement){
      console.log(element);
      if(element?.auth){
          if(!acountInfo){
            // console.log(`请登录`);
            navigate('/login')
          }
      }
    }

    useEffect(() => {
      console.log(location);
      findRoutes(routes, location.pathname)
    }, [location])
    

    

  return (
      <Outlet/>
  )
}
