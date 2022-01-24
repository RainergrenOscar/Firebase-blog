import { auth, provider } from "../firebaseConfig"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        navigate("/")
      })

  }
  return <div className='login-container'>
    <div className="card">
    <p>Sign in with Google</p>
    <button className='login-with-google-btn' onClick={signIn}>
      Sign in with Google
      </button>
    </div>
  </div>;
};

export default Login;
