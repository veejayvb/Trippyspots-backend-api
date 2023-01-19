import React from 'react'
import Addposts from '../../Components/AddPost/Addposts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './addpost.css'


const AddPost = () => {
  return (
    <div>
        
        <div className='Addpost'>
            <Addposts/>
            <Sidebar/>
        </div>
    </div>
  )
}

export default AddPost