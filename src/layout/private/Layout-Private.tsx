import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../../store/useAuthStore"

const LayoutPrivate = () => {
   const storage = useAuthStore(state => state.infoToken )
   return (
      <>
         {
            storage.id && storage.name 
               ? <Outlet />
               : <Navigate to="/" />
         }
      </>
   )
}

export default LayoutPrivate