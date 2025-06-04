// components/Navbar.jsx
import React from 'react';
import logo from '/logo.png';

const Navbar = ({ onRecipesClick }) => {
  return (
    <div className='bg-white h-[10vh] w-full flex items-center justify-between pr-4'>
      <div className="logo">
        <img src={logo} alt="logo" className='h-[50px] p-[5px] ml-2' />
      </div>
      <ul className='flex gap-4 items-center mr-4 text-sm text-gray-600'>
        <li onClick={onRecipesClick} className='cursor-pointer'>Recipes</li>
        <li onClick={() => window.location.href = '/about'} className='cursor-pointer'>About Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
