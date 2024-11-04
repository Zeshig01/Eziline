import React from 'react'

function TopHeader() {
  return (
    <div className=''>
        <div className='max-w-full h-1 bg-[#00BBD2]'></div>
    <div className='pt-4 mr-3 flex flex-row align-middle justify-evenly max-h-screen max-w-full'>
        <div className='text-center md:text-left  from-neutral-400'><i class="fa-solid fa-location-dot"></i> 
            <span className='text-gray-500'> Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</span>
         </div>
        <div className='text-center md:text-left '><i class="fa-solid fa-phone"></i> <span className='text-gray-500'> +923212225212 </span></div>
        <div className='text-center md:text-left '><i class="fa-regular fa-envelope"></i> <span className='text-gray-500'> info@eziline.com</span></div>
        <div className='text-center md:text-left border-l border-r border-gray-400 pl-6 pr-6 '><i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-linkedin-in"></i> <i class="fa-brands fa-threads"></i></div>

            <div className='w-20'></div>        
    </div>
    </div>
  )
}

export default TopHeader
