import React, {  useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { setCategory, toggle } from './store/appSlice';




const Navbar = () => {
  const [Input, setInput] = useState("")
  const dispatch = useDispatch();

const toggleHandler = () => {
  dispatch(toggle())
  
}

const searchVideo = () => {
  dispatch(setCategory(Input))
  setInput("");
}






  return (
    <div className='flex items-center justify-between px-6 shadow-lg fixed w-full z-10 bg-white   '>
      <div className='flex gap-4 items-center'>
      <GiHamburgerMenu onClick={toggleHandler} size={25} className='cursor-pointer'/>
        <img className='w-[20%]  ' src="https://t3.ftcdn.net/jpg/06/34/31/96/240_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" />
      </div>
      <div className="relative w-[46%] bg-white rounded-full border border-gray-600 ">
      <input
      value={Input}
      onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search"
        className=" bg-white h-10 px-5 pr-10 rounded-full  focus:outline-none text-md "
      />
      <svg
      onClick={searchVideo}
        className="absolute right-3 top-2.5 h-5 w-5 text-blue-500 rounded-full cursor-pointer "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
        <circle cx="10.5" cy="10.5" r="7.5"></circle>
      </svg>
    </div>

      <div className='flex gap-3 items-center'>
        {/* icons */}
        <FaVideo size={20} className='cursor-pointer'/>
        <IoIosNotifications size={20} className='cursor-pointer'/>
        <Avatar src='https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg ' className='rounded-full cursor-pointer ' size='34px' />
      </div>
      
    </div>
  )
}

export default Navbar
