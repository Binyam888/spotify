import React from 'react'
import Header from './Header/Header'

function Hero() {
  return (
    <div className='container bg-demo   m-[10px]  rounded-md overflow-y-hidden'>
        <Header/>
        <div className="hero-section  h-[91vh] bg-gradient-to-b bg-bgclr p-3">

            <div className="hero-top flex justify-between px-3  align-middle">
              <h1 className='font-bold text-[25px] hover:underline duration-100 cursor-pointer'>Spotify Playlist</h1>
              <p className='text-gray-400 font-bold hover:underline duration-100 cursor-pointer mt-[10px]'>Show all</p>
            </div>
        </div>
        </div>
  )
}

export default Hero