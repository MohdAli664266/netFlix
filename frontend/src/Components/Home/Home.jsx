import React, { useEffect, useState } from "react";
import netFlix from "../../assets/netflix.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { setIsLoggedIn, setIsSignup, setUser } from "../redux/reduceSlice";
import CardSample from "./CardSample";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("Mohd Ali");
  const user = useSelector((store) => store.app);
  const [apidata, setApidata] = useState([
    {
      Title: "Batman: The Killing Joke",
      Year: "2016",
      imdbID: "tt4853102",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);

  const data = async () => {
    await axios
      .get("https://www.omdbapi.com/?s=game&apikey=cd393314")
      .then((response) => {
        setApidata(response.data.Search);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user.isLoggedIn) {
      if (user.isSignup) {
        setName(user.user.data.username);
        data();
      } else {
        setName(user.user.data[0].username);
        data();
      }
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [user.isLoggedIn]);

  let path = "http://localhost:3000/api/v1/users";
  const logout = async (e) => {
    e.preventDefault();
    await axios
      .get(path + "/logout")
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          dispatch(setUser(null));
          dispatch(setIsLoggedIn(false));
          dispatch(setIsSignup(false));
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[black] w-full">
      <div className="absolute bg-gradient-to-b from-slate-950 flex justify-around items-center w-full top-0">
        <div className="">
          <img className="w-[150px]" src={netFlix} alt="" />
        </div>
        <div className=" flex justify-center items-center gap-2">
          <button
            onClick={(e) => logout(e)}
            className="bg-[red] rounded-sm text-white font-bold px-2 hover:text-[hsl(0,10%,90%)]"
          >
            Logout
          </button>
          <h1 className="bg-transparent rounded-sm text-white font-bold p-2 hover:text-[hsl(0,10%,90%)]">
            {name}
          </h1>
        </div>
      </div>
      <div className="absolute left-10 top-[400px] text-white w-[250px]">
        <h1 className="font-bold text-2xl">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          ut. Tempora suscipit tempore quaerat id !
        </p>
        <button className="bg-white/35 px-4 rounded-sm text-black hover:bg-black/10">
          Play now
        </button>
      </div>
      <div className="w-full aspect-video bg-red-700">
        <iframe
          src="https://www.youtube.com/embed/zclkROvBRxE?si=GVHkL8GARzfKlOfe&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full aspect-video"
        ></iframe>
      </div>
      <h1 className="font-bold text-2xl z-20 text-white mt-10">
        Top Rated Movies
      </h1>
      <div className="bg-black text-white mt-2 w-full flex justify-start items-start px-10 overflow-x-auto gap-4 scrollbar-hide">
        {apidata.length > 0 &&
          apidata.map((movie) => (
            <div key={movie.imdbID}>
              <CardSample movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
