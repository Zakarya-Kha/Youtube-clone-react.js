import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { useSearchParams } from 'react-router-dom'
import { SlLike, SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { API_KEY } from '../constant/youtube';
import axios from 'axios';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from './store/ChatSlice';


const Watch = () => {
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  const dispatch = useDispatch()

  const [singlevideo, setSingleVideo] = useState({})


  const getSingleVideo = async() => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      setSingleVideo(res?.data?.items[0]);
  } catch (error) {
      console.log(error);
  }
  }

  const sendMessage = () => {
    dispatch(setMessage({name:"Patel", message:input}));
    setInput("");
}

  useEffect(() => {
    getSingleVideo()
  }, [])
  

  return (
    <div className='flex mt-16'>
    <div className=' mx-4 border'>
      <iframe 
      className='rounded-md'
      width="860"
       height="415" 
       src={`https://www.youtube.com/embed/${videoId}?si=uGGmWNAfog9D09hc?&autoplay=1`}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>
       </iframe>
       <h1 className='font-bold ml-3'>{singlevideo?.snippet?.title}</h1>
       <div className='flex gap-2 mt-2 '>
       <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
       <span className='font-bold text-sm'>{singlevideo?.snippet?.channelTitle}</span>


       <div className='flex gap-24  w-[700px] justify-center items-center'>
      
        <div>

          <button className=' bg-black rounded-full text-white px-2'>Subscribe</button>
        </div>
        <div className='flex gap-16'>
          <div className='flex gap-4 px-3 rounded-full bg-gray-200 cursor-pointer items-center'>
          <SlLike size={20}/>
          <span className='font-bold text-sm'>{singlevideo?.statistics?.likeCount}</span>
         <SlDislike size={20}/>
          <span className='font-bold text-sm'>{singlevideo?.statistics?.dislikeCount}</span>
        </div>
          <div className='flex items-center gap-2  bg-gray-200 cursor-pointer rounded-full px-2'>
            <PiShareFat size={20}/>
            <span>share</span>
          </div>
          <div className='flex gap-2 items-center bg-gray-200 cursor-pointer rounded-full px-2'>
            <LiaDownloadSolid size={20}/>
          <span>Download</span>
          </div>
       </div>
       </div>
       </div>

       
       
    </div>

    <div className='border w-[260px] '>
      <div className='flex justify-between items-center '>
        <h1>Top chat</h1>
        <BsThreeDotsVertical/>
      </div>

      <div>
        <div className='h-[28rem] border-b-2 mb-2 overflow-y-scroll flex flex-col-reverse'>
          <LiveChat/>
        </div>
        <div>
          <div className=' border-b-2 mb-2  ml-2 flex items-center '>
            <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
             type="text" placeholder='send a message' className='outline-none ml-2' />
            <div>
            <IoMdSend
            onClick={sendMessage}
             size={30} className='bg-gray-300 px-2 rounded-full cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Watch
