import {Route, Routes} from 'react-router-dom';
import './App.css';
import GeoFencing from './components/GeoFencing';
import AuthLayout from './components/AuthLayout';
import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import AdminLayout from './components/AdminLayout';
import PageNotFound from './components/PageNotFound';
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './slices/auth-slice';
import UserLayout from './components/UserLayout';
import VerifierLayout from './components/VerifierLayout';
import HeroLayout from './components/HeroLayout';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch])

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
        <Header/>
        <Toaster position="top-right" />
        <Routes>
          <Route path='/geofence' element={<GeoFencing/>}></Route>
          <Route path='/' element={<HeroLayout/>}></Route>

          <Route path='/auth' element={<AuthLayout/>}>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Registration/>} />
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
          </Route>

          <Route path='/user' element={<UserLayout/>}>
          </Route>

          <Route path='/verifier' element={<VerifierLayout/>}>
          </Route>

          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
