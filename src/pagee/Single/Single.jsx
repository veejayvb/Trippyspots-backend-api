import React from 'react';
import SinglePost from '../../Components/SinglePost/SinglePost';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './single.css'

const Single = () => {
  return (
    <div className='singlePage'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single