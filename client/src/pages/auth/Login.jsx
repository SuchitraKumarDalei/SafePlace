import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { login } from '../../slices/auth-slice'
import toast from "react-hot-toast";

export default function Login(){
    const initialState = {
        username : '',
        password : ''
    }
    const[formData,setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

     function handleOnSubmit(event){
      event.preventDefault();
      dispatch(login(formData)).then((data) => {
        if(data?.payload?.success) {
          toast.success(data?.payload?.message || "Successfully login");
          setFormData(initialState);
          navigate('/auth/signup');
        } else {
          toast.error(data?.payload?.message || "Login failed!");
        }})
    }
    function handleOnChange (event){
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
    }

    return(
        <div className="min-h-screen flex items-center justify-center px-4">
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
 
          <form onSubmit={handleOnSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                name="username"
                value={formData.username}
                onChange={handleOnChange}
              />
            </div>
 
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
              />
              <div className="text-right text-sm mt-1 text-gray-500 cursor-pointer hover:underline">
                Forgot Password?
              </div>
            </div>
 
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800"
            >
              Login
            </button>
          </form>
 
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
 
          <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>
 
          <button className="w-full border border-gray-300 py-2 mt-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/452196/apple.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            <span>Continue with Apple</span>
          </button>
 
          <p className="text-center text-sm mt-5">
            Don’t have an account?{" "}
            <Link to={"/auth/signup"} className="text-teal-700 font-medium cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
 
          <p className="text-xs text-gray-400 text-center mt-5">
            By creating an account you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    )
}