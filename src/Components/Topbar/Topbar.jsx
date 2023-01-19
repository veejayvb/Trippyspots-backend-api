import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Topbar = () => {

  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = () =>{
    dispatch({type : "LOGOUT"})
  }
  return (
    <div className='topbar'>
        <div className="topLeft">
          <ul className='topList'>
            <li className='topLeftMenu' > <Link to='/' className='Link'>Home</Link> </li>
            <li className='topLeftMenu'><Link to='/addpost'className='Link' >AddPost</Link></li>
            <li className='topLeftMenu'>Contact</li>
            <li className='topLeftMenu'>About</li>
          </ul>
        </div>
        <div className="topCenter">
          TRIPPYSPOTS
        </div>
        <div className="topRight">
         
          {user ? (
            <>
             <Link to='/settings'>
               <img src={ PF +  user.profilepicture}
                  className='topImg' alt="" /> 
              </Link>
            <li className='topLeftMenu'> <Link to='/login' className='Link' onClick={handleLogout}  >Logout</Link></li>
            <li className='topLeftMenu'><Link to='/settings' className='Link' >Settings</Link></li>
            </>
          ) : (
            <li className='topLeftMenu'> <Link to='/login'  style={{textDecoration:"none" , color:"white"}}>Login</Link></li>
          )}
          
        </div>
    </div>
  )
}

export default Topbar