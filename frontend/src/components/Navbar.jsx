import React from 'react';
import Submit from './Submit'; // Import the Submit component

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold text-xl mr-2">Abstract</span>
        <span className="text-xl">| Help Center</span>
      </div>
      <Submit /> 
    </nav>
  );
};

export default Navbar;