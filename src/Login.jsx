// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate } from "react-router-dom";
 

const Login = () => {
    const navigate=useNavigate();
    return ( 
        <div className="main-login-page">
            {/* <div className="login-header">

            </div> */}
            <div className="main-login-container">
                <div className="icons-container">
                    <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
                </div>
                <div className="email-pass">
                    
                        <input className="main-e" type="text" placeholder="Email" />
                        <input className="main-e" type="password" placeholder="Password"/>
                </div>
                <div className="login-but">
                    <div className="new">
                        <a href="/register"> Create Account</a>
                    </div>
                    <button className="l-button" onClick={()=>navigate('/mainpage')}>Login</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;