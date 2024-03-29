import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import netFlix from '../../assets/netflix.jpg';
import {useDispatch} from 'react-redux';
import {setUser, setIsLoggedIn, setIsSignup} from '../redux/reduceSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let path = "http://localhost:3000/api/v1/users";
  const signupSubmit = async (e)=>
  {
    e.preventDefault();
    await axios.post(`${path}/register?username=${username}&email=${email}&password=${password}`)
    .then((response)=>
    {
      if(response.data.success)
      {
        toast.success(response.data.message);
        dispatch(setUser(response.data));
        dispatch(setIsLoggedIn(response.data.success));
        dispatch(setIsSignup(response.data.success));
        navigate("/home",{replace:true});
      }
      else{
        toast.error(response.data.message);
      }
    })
    .catch((error)=>
    {
      console.log("Error",error);
    })}
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-screen overflow-hidden absolute blur-[1px]">
        <img
          className="object-cover"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="z-20 absolute left-10 top-0">
        <img className="w-[180px]" src={netFlix} alt="" srcset="" />
      </div>
      <div className="h-screen  z-10 w-full flex justify-center items-center p-10 bg-gray-950/55">
        <div className="flex flex-col bg-gray-950/85 p-12 gap-4">
          <h1 className="text-white text-3xl font-bold">Sign Up</h1>
          <form
            onSubmit={signupSubmit}
            method="post"
            className="flex justify-center items-center flex-col gap-2"
          >
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="Username"
              className="outline-none bg-gray-950/10 px-2 py-2 w-full rounded-sm text-white"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email Address"
              className="outline-none bg-gray-950/10 px-2 py-2 w-full rounded-sm text-white"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-none border-none bg-gray-950/10 px-2 py-2 w-full rounded-sm text-white"
            />
            <button type="submit" className="w-full text-white bg-[red]">
              Signup
            </button>
            <NavLink to="/forgot">
              <button className="text-white">Forgot Password?</button>
            </NavLink>
          </form>
          <div className="flex text-white gap-2 mt-7">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="flex text-white">
            <p className="text-gray-700">Already have an account?</p>
            <NavLink to="/">
              <span>Sign In now</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
