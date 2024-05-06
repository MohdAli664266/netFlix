import React from "react";
import Child from "../../assets/children.png";;

function CardSample({movie}) {
  
  return (
    <div className="w-[210px] flex flex-col hover:cursor-pointer p-2">
          <div className='w-[200px] bg-yellow-200'>
          <img src={movie.Poster} alt="" srcset="" />
          </div>
        <div>
            <h1 className='font-bold text-xl'>{movie.Title}</h1>
            <p>{movie.Plot}</p>
        </div>
    </div>
  );
}

export default CardSample;
