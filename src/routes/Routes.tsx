import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Loader from '../components/shared/Loader';

const LayoutPublic = lazy(() => import('../layout/public/Layout-Public'));
const LayoutPrivate = lazy(() => import('../layout/private/Layout-Private'));
const Login = lazy(() => import('../pages/login/Login'));
const Profile = lazy(() => import('../pages/profile/Profile'));

const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='bg-primary h-screen flex justify-center items-center'><Loader/></div>}>
        <Routes>
          <Route element={<LayoutPublic />}>
            <Route index element={<Login />} />
          </Route>

          <Route path="/profile" element={<LayoutPrivate />}>
            <Route index element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
