import React from 'react'
import BrandLogo from "/assets/images/logo/TechQR_logo.jpg"

const Header = () => {
  return (
    <div className="flex w-full">
      <header className='flex w-full h-auto'>
        <div className="grid grid-cols-2 w-full items-center justify-between">
          <div className="flex w-full items-center gap-10">
            <div className="flex h-10 w-10 " >
              <img src={BrandLogo} alt="" />
            </div>
            <nav className="flex w-auto h-auto">
              <ul className='flex w-auto gap-8 text-base text-white'>
                <li className='flex'><a href="">About LisA</a></li> 
                <li className='flex'><a href="">Features</a></li>
                <li className='flex'><a href="">Marketplace</a></li>
                <li className='flex'><a href="">What is LetsUpgrade?</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex h-full w-full items-center justify-end gap-5">
            <button className="flex py-2 px-3 text-base text-white items-center justify-center rounded-md ">Support</button>
            <button className="flex py-2 px-3 text-base text-white items-center justify-center rounded-md bg-gray-600 ">Support</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header