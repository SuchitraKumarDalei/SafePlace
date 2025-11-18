import { Navigate, useLocation, useNavigate } from "react-router"

export default function CheckAuth({isAuthenticate,user,children}){
    const navigate = useNavigate();
    const location = useLocation();

    if(isAuthenticate && (location.pathname.includes('/auth') || location.pathname === '/')){
        if(user.role === 'admin'){
            return <Navigate to={'/admin/home'}/>
        }else if(user.role === 'verifier'){
            return <Navigate to={'/verifier/home'}/>
        }else{
            return <Navigate to={'/user/home'}/>
        }
    }

    if(!isAuthenticate && (location.pathname.includes('/admin') || location.pathname.includes('/verifier') || location.pathname.includes('/user'))){
         return <Navigate to={'/'}/>
    }

    return <>{children}</>
}