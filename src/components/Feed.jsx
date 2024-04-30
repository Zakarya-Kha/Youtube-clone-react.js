import React from 'react'
import ButtonList from './ButtonList'
import VideosContainer from './VideosContainer'


const Feed = () => {
  return (
    <div className='pt-16 pl-9 ml-4  flex flex-col   border '>
      <ButtonList/>
      <VideosContainer />
    </div>
  )
}

export default Feed
