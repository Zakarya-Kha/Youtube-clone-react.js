import React, {useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from '../constant/youtube'
import { API_KEY } from '../constant/youtube'
import VideoCart from './VideoCart'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo } from './store/appSlice'


const VideosContainer = () => {
const {video , category} = useSelector((store) => store.app)
 const dispatch = useDispatch()

  const fetchYoutubeVideos = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items))
  } catch (error) {
      console.log(error);
  }
  }

  const fetchVideoByCategory = async(category) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
    console.log(res);
    dispatch(setHomeVideo(res?.data?.items))
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    if (category === "All") {
      fetchYoutubeVideos()
    }else {
      fetchVideoByCategory(category)
    }
  },[category]);


  return (
    <div className='flex flex-wrap   my-6 w-full gap-6 mx-auto'>
      {
        video.map(item => (
          <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id }>
          <VideoCart  item={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default VideosContainer
