import React from 'react'
import '../Components/HeroSection.css'

export default function HeroSection() {
    return (
      
        <div className="pb-40 min-w-full bg-slate-950 relative overflow-hidden">
   

   <div> {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="star absolute"></div>
        ))}</div>
        <div className='fixed p-10 bottom-0'><img src="https://www.eziline.com/wp-content/uploads/award-pic-1-150x150.png" alt="" /></div>
   
   
      <div>  
       <div className='flex justify-center pt-20'><img src="https://www.eziline.com/wp-content/uploads/2-ezihost.png" alt="" /></div>
        <div className='flex flex-row justify-around pb-10 pt-24'>
        <div className='flex justify-center '><img src="https://www.eziline.com/wp-content/uploads/3-ezihms.png" alt="" /></div>
        <div className='flex justify-center '><img src="https://www.eziline.com/wp-content/uploads/3-ezisc.png" alt="" /></div>
        </div>
        <div className='flex flex-row justify-around pb-10 pt-24'>
        <div className='flex justify-center '><img src="https://www.eziline.com/wp-content/uploads/2-ezihost.png" alt="" /></div>
        <div className='flex justify-center '><img src="https://www.eziline.com/wp-content/uploads/2-ezihost.png" alt="" /></div>
        
        </div>
        <div className='flex justify-center pb-10 pt-24'><img src="https://www.eziline.com/wp-content/uploads/2-ezihost.png" alt="" /></div>        




       </div>

      </div>
    );
  };