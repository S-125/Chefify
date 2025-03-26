import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <div className='bg-white h-[10vh] w-full flex items-center justify-between'>
        <div className="logo">
            <img src={logo} alt="logo" className='h-[50px] p-[5px] m-0 ml-2' />
        </div>
        <div >
            <ul className='flex gap-4 items-center m-0 p-0 text-sm overflow-y-hidden mr-4 text-gray-600'>
                <li>
                    What to Cook
                </li>
                <li>
                     Ingredients   
                </li>
                <li>
                       Recipes
                </li>
                 <li>
                        About us
                  </li>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar
