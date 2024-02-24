import React from 'react'
import { GoHome } from "react-icons/go";
import { BsSpotify } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { SlSocialSpotify } from "react-icons/sl";
function Sidebar() {
  return (
    <div className='sidebar-container pl-[10px]'>

        <div className="sidebar-top  bg-demo w-[450px] h-[160px] mt-[10px] mb-[10px]  rounded-md px-[20px] pt-[15px]">
         <ul className='text-white flex flex-col '>
           <li className='flex font-bold'> <span className='mr-[2px] '><BsSpotify size={23}/></span>Spotify</li>
            <li className='flex mt-[25px] font-bold '> <span className=' mr-[15px] mt-[-5px]'><GoHomeFill size={30}/></span>Home</li>
            <li className='flex mt-[25px] font-bold'> <span className=' mr-[15px] mt-[-5px]'><CiSearch size={30}/></span>Search</li>
           
            

         </ul>
        </div>

        <div className="sidebar-middle bg-demo w-[450px] h-[500px] rounded-md">

        </div>
    </div>
  )
}

export default Sidebar