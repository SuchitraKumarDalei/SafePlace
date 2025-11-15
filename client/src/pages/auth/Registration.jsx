import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registration } from '../../slices/auth-slice'
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function Registration(){
     const initialState = {
        username : '',
        email : '',
        password : '',
        confirmPassword : '',
        role:''
    }
    const selectItem = ['tourist','verifier','admin']
    const[formData,setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnSubmit(event){
      event.preventDefault();
      if(formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      console.log("Inside handle ON submit Form Data :",formData);
      dispatch(registration(formData)).then((data) => {
        if(data?.payload?.success) {
          toast.success(data?.payload?.message || "Successfully registered");
          setFormData(initialState);
          navigate('/auth/login');
        } else {
          toast.error(data?.payload?.message || "Registration failed!");
        }}).catch(() => toast.error("Server error"));
    }
    function handleOnChange (event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    //console.log("Form Data :",formData);

    return(
        <div className="min-h-screen flex items-center justify-center px-4">
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-6">Registration</h2>
 
          <form onSubmit={handleOnSubmit} className="space-y-4">
             <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter a username"
                name="username"
                value={formData.username}
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                required
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
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleOnChange}
                required
              />
              
            </div>
            <div>
            <select className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                name="role" 
                value={formData.role} 
                onChange={handleOnChange}
                required
                >
                <option value="" disabled>Select Role</option>
                {selectItem?.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                ))}
            </select>
            <div className="text-right text-sm mt-1 text-gray-500 cursor-pointer hover:underline">
                Forgot Password?
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 hover:pointer"
            >
              Sign Up
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
            <Link to={"/auth/login"} className="text-teal-700 font-medium cursor-pointer hover:underline">
              Login
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