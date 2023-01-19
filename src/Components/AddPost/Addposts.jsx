import React from 'react'
import { useState, useContext } from 'react'
import { Context } from '../../context/Context'
import './addposts.css'
import axios from 'axios'

const Addposts = () => {
  const[title, setTitle] = useState("")
  const[desc, setDesc] = useState("")
  const[file, setFile] = useState("") 
  const {user} = useContext(Context)

  const handleClick = async(e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file)
      newPost.photo = filename
      try{
        await axios.post("http://localhost:5000/api/upload", data)
      }catch(err){}
    }
    try{
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/"+res.data._id)
    }catch(err){}
  }
  return (
    <div className='writePost'>
      { file && 
        (<img className="writeImg" src={URL.createObjectURL(file)} alt="" />)
      }
      
      <form className="writeForm" onSubmit={handleClick}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input 
            id="fileInput" 
            type="file" 
            style={{ display: "none" }} 
            onChange={(e) => setFile(e.target.files[0])}
            />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Anything You want to write..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Addposts