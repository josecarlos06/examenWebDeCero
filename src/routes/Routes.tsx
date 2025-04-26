import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import LayoutPublic from '../layout/public/Layout-Public'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'
import LayoutPrivate from '../layout/private/Layout-Private'

// Creacion de las rutas
const Routing= () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutPublic />}>
               <Route index element={<Login/>} />
            </Route>

            <Route path='/profile' element={<LayoutPrivate />}>
               <Route index element={<Profile/>} />
            </Route>

            <Route path='*' element={<Navigate to="/" />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Routing