import React from "react";
import Logo from "../../assets/netflix.jpg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="h-screen bg-black/50 absolute w-full">
      <div className="flex flex-col items-center justify-center  z-10">
        <div className="flex justify-around items-center w-full bg-gradient-to-b from-gray-900">
          <div className="">
            <img className="w-[150px]" src={Logo} alt="" srcset="" />
          </div>
          <div className="flex gap-4">
            <select
              name=""
              id=""
              className="bg-transparent border-2 outline-none rounded-sm text-white px-2 border-none"
            >
              <option value="English" className="text-black">
                English
              </option>
              <option value="Hindi" className="text-black">
                Hindi
              </option>
            </select>
            <NavLink to="/login">
              <button className="bg-[red] px-2 rounded-sm text-white">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>

        <div className="h-[50%] text-white p-10 mt-16 text-center">
          <h1 className="text-4xl font-bold gap-2 mt-2">
            Unlimited movies, TV shows and more
          </h1>
          <p className="mt-2">Watch anywhere. Cancel anytime. </p>
          <p className="mt-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center items-center mt-2">
            <form
              action="/login"
              method="post"
              className="flex gap-1 w-full px-10"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none border-none bg-gray-950/25 px-2 py-2 w-full rounded-sm"
              ></input>
              <button
                type="submit"
                className="bg-[red] shrink-0 px-2 rounded-sm"
              >
                Get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
