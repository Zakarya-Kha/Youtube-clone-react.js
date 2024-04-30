import React,{useState, useEffect} from 'react'
import Avatar from 'react-avatar'
import axios from 'axios';
import { API_KEY } from '../constant/youtube';

const VideoCart = ({item}) => {
  const [ytIcon, setYtIcon] = useState("");

  const getYoutubeChannelName = async () =>{
    try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
        setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getYoutubeChannelName();
},[])

  return (
    <div className=''>
      <div className='w-[300px]'>
        <img className='rounded-md ' src={item.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className='flex gap-2 items-center'>
        <Avatar src={ytIcon} className='rounded-full cursor-pointer ' size='34px'/>
        <div className='w-[256px]'>
            <p className='font-bold text-sm'>{item.snippet.title}</p>
            <p className='text-sm'>{item.snippet.channelTitle} </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCart
