// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Login = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=()=>{
        axios.get(`https://localhost:44351/api/Users/${email},${password}`)
        .then(result=>{
          localStorage.setItem("user",JSON.stringify(result.data))
          Navigate('/mainpage')
        })
      }

    return ( 
        <div className="main-login-container">
        <div className="icons-container">
            <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
        </div>
        <div className="email-pass">
            
                <input className="main-e" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input className="main-e" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className="login-but">
            <div className="new">
                <a href="/register"> Create Account</a>
            </div>
            <button className="l-button" onClick={()=>handleLogin()}>Login</button>
        </div>
    </div>
     );
}
 
export default Login;