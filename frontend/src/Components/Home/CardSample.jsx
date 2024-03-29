import React from 'react'
import Child from '../../assets/children.png';
import GlobalApi from '../GlobalApi/GlobalApi';
function CardSample() {
    console.log(GlobalApi);
  return (
    <div className='w-[210px] flex flex-col hover:cursor-pointer p-2'>
        <div className='w-[200px] bg-yellow-200'><img src={Child} alt="" srcset="" /></div>
        <div>
            <h1 className='font-bold text-xl'>Movie name</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default CardSample