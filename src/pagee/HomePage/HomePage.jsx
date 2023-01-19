import React from 'react'
import './homepage.css'

import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Posts from '../../Components/Posts/Posts'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const HomePage = ({User}) => {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  console.log(search)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" +search);
      setPosts(res.data)
      // console.log(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    
    <Header User={User}/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>

    </>
  )
}

export default HomePage