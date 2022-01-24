import './App.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from "./firebaseConfig"


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")) //usestate to check if user is logged in or not


  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear()
        setIsAuth(false) 
        window.location.pathname ="/login" //Cant use the useNavigate hook outside of Router
      })
  }
  

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ? <Link to="/login">Login</Link> :
          <>
          <Link to="/create">Create Post</Link>
            <button onClick={signOutUser} className='logOutButton'>Log out</button>
          </>
        }
          
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>}/>
        <Route path="/create" element={<CreatePost isAuth={isAuth}/> }/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
