import React from 'react';
import { useContext, useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Context } from '../../context/Context';
import './settings.css';
import axios from 'axios'

const Settings = () => {
    const {user,dispatch } = useContext(Context)

    const[file, setFile] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)

    const PF = "http://localhost:5000/images/"


    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
          userId : user._id,
          username,
          email,
          password,
        };
        if(file){
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file)
          updatedUser.profilepicture = filename
          try{
            await axios.post("http://localhost:5000/api/upload", data)
          }catch(err){}
        }
        try{
         const res = await axios.put("http://localhost:5000/api/users/"+user._id, updatedUser);
         setSuccess(true)
         dispatch({type:"UPDATE_SUCCESS", payload: res.data})
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
        }
      }


  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Your Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <p>{user.username}</p>
                <div className="settingsPP">
                    <img
                    // src={ file ? (URL.createObjectURL(file)) :( PF + user.profilepicture)}
                    src={file?  URL.createObjectURL(file): (PF + user.profilepicture)}
                    alt=""
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    className="settingsPPInput"
                    onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                {/* <p>{user._id}</p> */}
                <input type="text" placeholder={user.username}  onChange={(e) => {setUsername(e.target.value)}} />
                <label>Email</label>
                <input type="email" placeholder={user.email}  onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Password</label>
                <input type="password" placeholder="*******" onChange={(e)=>{setPassword(e.target.value)}} />
                <button className="settingsSubmitButton" type="submit">
                    Update
                </button>
                {success&& <p style={{color:"green", textAlign: "center",marginTop: "20px"}}>Profile updated success ...</p>}
                </form>
    
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings

//"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg"