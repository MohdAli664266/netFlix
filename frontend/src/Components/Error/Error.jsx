import React from "react";
import { useNavigate } from "react-router-dom";
import netFlix from '../../assets/netflix.jpg';
function Error() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[black]/75 h-screen w-full">
        <div className="absolute w-full h-screen overflow-hidden">
            <img src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="" />
        </div>
        <div className="w-full h-screen bg-[black]/55 z-10 absolute"></div>
        <div className="top-5 left-10 absolute z-10 w-[150px]">
            <img src={netFlix} alt="" />
        </div>
      <div className="flex flex-col justify-center items-center z-10 gap-4">
        <h1 className="text-5xl font-bold text-white">
          Sorry! page not found
        </h1>
        <p className="px-10 text-[white]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          maiores eaque cupiditate alias obcaecati quibusdam est eius voluptates
          asperiores, doloremque corporis provident. Laborum sequi aspernatur
          temporibus dignissimos earum ipsa. Nulla!
        </p>
        <button className="px-2 bg-[red] text-white font-bold" onClick={home}>
          Go back to Home
        </button>
      </div>
    </div>
  );
}

export default Error;
