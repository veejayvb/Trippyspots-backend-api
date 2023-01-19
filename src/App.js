import './App.css';
import HomePage from './pagee/HomePage/HomePage';
import Topbar from './Components/Topbar/Topbar';
import Login from './pagee/Login/Login';
import Single from './pagee/Single/Single';
import AddPost from './pagee/AddPosts/AddPost';
import Settings from './pagee/Setings/Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pagee/Register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';



function App() {

  const {user} = useContext(Context);
  return (
    <Router>
     <Topbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/posts" element={<HomePage />}></Route>
          <Route path="/register"  element= { user ? <HomePage/>:<Register />} ></Route>
          <Route path="/login" element = {user ? <HomePage /> : <Login />} ></Route>
          <Route path="/post/:id" element = {<Single/>}></Route>
          <Route path="/addpost" element ={user ? <AddPost/> : <Login />}></Route>
          <Route path="/settings" element = {user ? <Settings /> : <Login />} > </Route>
        </Routes>
     </Router>
  );
}

export default App;
