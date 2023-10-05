
import React from 'react';

const Navbar = () => {
  return (
    <nav class ="p-4">
      <div class ="container mx-auto">
        <div class ="flex justify-between items-center">
          <div class ="text-white text-2xl font-bold">My App</div>
          <ul class ="flex space-x-4">
            <li><a href="" class ="text-white">Home</a></li>
            <li><a href="" class ="text-white">About</a></li>
            <li><a href="" class ="text-white">Services</a></li>
            <li><a href="" class ="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;