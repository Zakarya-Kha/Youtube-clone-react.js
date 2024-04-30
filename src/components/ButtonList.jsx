import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from './store/appSlice';

const buttons = ["All", "Html", "Css", "JavaScript", "Web Development", "App Development", "Music", "Songs", "Audio", "Funny",  "News", "cricket", "Movie"];

const ButtonList = () => {
  const dispatch = useDispatch();
  const [Active, setActive] = useState('All')

  const VideoByTag = (tag) => {
    if (Active !== tag) {
      dispatch(setCategory(tag))
    setActive(tag)
    }
    
  }

  return (
    <div className=''>
      <div className=' mt-[-10px] py-3 overflow-x-scroll no-scrollbar flex w-full my-1
 '>
        {buttons.map((btn) => (
          <div key={btn}>
          <button 
          onClick={() => {VideoByTag(btn)}}
           className={` ${Active === btn ? "bg-black text-white" : "bg-gray-200"}  px-2  mx-2 rounded-md mb-6 `}><span className='whitespace-nowrap'>{btn}</span></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ButtonList

