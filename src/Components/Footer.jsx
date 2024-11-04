import React from 'react'

function Footer() {
  return (

    <div>
    
    <div className=' bg-[#212331] flex flex-row pt-14 pb-8'>
      {/* box1 */}
      <div className='Box1 flex flex-1 flex-col ]'> 
        <div className='ml-20 mr-20'>
            <h1 className='text-white font-bold text-[29px]'>About</h1>
            <p className='text-gray-400 mt-3'>
            Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region
            </p>
            <img className='mt-7' src="https://www.eziline.com/wp-content/uploads/ax.png" alt="" />
            <img className='mt-5' src="https://www.eziline.com/wp-content/uploads/gurrantee.png" alt="" />


            </div>
      </div>


{/* box2 */}
      <div className='Box2 flex flex-col flex-1'>
            
      <h1 className='text-white font-bold text-[29px]'>Recent Posts</h1>
      <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>US Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
              <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>UK Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
      </div>


{/* Box3 */}
      <div className='Box3 flex flex-1 flex-col'>

        <h1 className='text-white font-bold text-[29px]'>Contact</h1>
              <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>PK Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
              <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>US Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
              <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>UK Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
              <div className='pt-1'>
                <span><h1 className='inline text-white pr-1'>UK Office</h1></span>
                <span><p className='inline text-zinc-500'>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></span>
              </div>
              <div>
              <span><p className='inline text-zinc-500'>Ph : +92 51 5491184 / +92 51 8772888</p></span>
              <span><p className='inline text-zinc-500'>Email : info[@]eziline.com</p></span>
              
              </div>
      </div>
      
    </div>
            <div className='bg-[#181828] flex flex-row justify-around pt-3 pb-3'>

                    <div className='text-gray-500'>@copywrights Eziline Software House</div>
                    <div className='text-gray-500'>
                  <span className='pr-2'>Career</span>
                  <span className='pr-5 pl-5 border-l border-r border-gray-500'>Internship</span>
                  <span className='pr-5 pl-5  border-r border-gray-500'>Ezi-Product</span>
                  <span className='pr-5 pl-5  border-r border-gray-500'>Banks</span>
                  

                  
                  

                    </div>
                    <div class="flex space-x-4 text-gray-600">
  <a href="https://facebook.com" target="_blank" class="hover:text-blue-600">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" class="hover:text-blue-700">
    <i class="fab fa-linkedin-in"></i>
  </a>
</div>

              
              
              
            </div>
    </div>
  )
}

export default Footer
