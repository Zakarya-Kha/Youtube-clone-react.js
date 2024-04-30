import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

const sidebarItem = [
    {
        id:1,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:2,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:3,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },



    {
        id:4,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:5,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:6,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },

    {
        id:7,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:8,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:9,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },

    {
        id:10,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:11,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:12,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },

    {
        id:13,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:14,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:15,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },

    {
        id:16,
        icon: <FaHome size={25} className='cursor-pointer'/>,
        title: 'Home',
        
    },
    {
        id:17,
        icon: <SiYoutubeshorts size={25} className='cursor-pointer'/>,
        title: 'Shorts',
    },
    {
        id:18,
        icon: <MdSubscriptions size={25} className='cursor-pointer'/>,
        title: 'Subscriptions',
    },
]

const Sidebar = () => {
    const open = useSelector((store) => store.app.open)
    console.log(open)

  return (
    <div className={`${open ? "" : "hidden"}`}>
    <div className='px-6  border pt-6  overflow-y-scroll h-[calc(100vh-3rem)]  mt-12   '>
        {
            sidebarItem.map((item)=>(
                <div key={item.id} className='flex items-center gap-4 my-4'>
        {item.icon}
        <span className='cursor-pointer '>{item.title}</span>
      </div>
            ))
        }
      
    </div>
    </div>
  )
}

export default Sidebar
