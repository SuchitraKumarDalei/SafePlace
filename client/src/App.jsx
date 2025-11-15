import {Route, Routes} from 'react-router-dom';
import './App.css';
import GeoFencing from './components/GeoFencing';
import AuthLayout from './components/AuthLayout';
import Login from './pages/auth/Login';
import Registration from './pages/auth/Registration';
import AdminLayout from './components/AdminLayout';
import PageNotFound from './components/PageNotFound';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
        {/* Header */}
        <Toaster position="top-right" />
        <Routes>
          <Route path='/' element={<GeoFencing/>}></Route>

          <Route path='/auth' element={<AuthLayout/>}>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Registration/>} />
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
          </Route>

          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>


        {/* Footer  */}
    </div>

    
  )
}

export default App
