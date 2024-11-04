import React from 'react'
import image from '../assets/image.png'

function Header() {
  return (
    <div className='flex flex-row bottom justify-between items-center pl-6 pr-8 pt-6 bg-black pb-4 mt-5 '>
      <div className='flex-grow text-center'><img src={image} alt="" /></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Home </h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Service</h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Portfolio</h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>EZI_Updates</h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Software</h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Login</h1></div>
      <div className='flex-grow text-center'><h1 className='text-white flex align-middle justify-center size-7'>Contact</h1></div>
      <div className='flex-grow text-center'><button className="bg-[url('https://www.eziline.com/wp-content/uploads/71dd02f49176464168ee8120e90b1bed-1.png')] bg-cover bg-center w-32 h-12 text-white rounded-md font-bold border border-orange-400">16 Annivesary</button></div>
      <i className="fa-solid fa-magnifying-glass text-gray-100 flex align-middle  justify-center"></i>


      
    </div>
  )
}

export default Header
