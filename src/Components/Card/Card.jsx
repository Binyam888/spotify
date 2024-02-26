import React from 'react'
import { BsSpotify } from "react-icons/bs";
import demo from '../../assets/demo.webp'

function Card() {
  return (
    <div className='card-container mt-[20px] ml-[25px] bg-neutral-800 w-[180px] p-3 rounded-lg cursor-pointer hover:bg-bgclr duration-200 '> 
    <div className="card-top">
    <span className=' mt-[10px] ml-[10px] absolute'><BsSpotify/></span> 
      <img className='w-[200px] h-[150px] rounded-md ' src={demo} alt="" />
     
    </div>
    <div className="card-bottom mt-[10px] ">
      <h1 className='main-heading font-medium'>lofi beats</h1>
      <p className='text-gray-400 text-[13px] font-medium'>chill beats , lofi vibes, new tracks every week...</p>
    </div>
    </div>
  )
}

export default Card