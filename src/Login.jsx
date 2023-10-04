// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msg,setMsg]=useState(false);
    const [loading,setLoad]=useState(false);

    const handleLogin= async ()=>{

                // if(email === 'admin@gmail.com' && password === 'Admin@123'){
        //     axios.get(`https://localhost:44351/api/Users/${email},${password}`)
        //     .then(result=>{
        //       localStorage.setItem("user",JSON.stringify(result.data))
        //       Navigate('/admin')
        //     })
        // }
        let result = await fetch(`https://localhost:44351/api/Users/${email},${password}`)
        let a = await result.json();
        localStorage.setItem("user",JSON.stringify(a))
            if(email.length!=0 && password.length!=0 && result.status==200){
                if (email === 'admin@gmail.com' && password === 'Admin@123') {
                    setMsg(false)
                    console.log('hi')
                    navigate('/admin');
                }
                else if(email.length!=0 && password.length!=0 && result.status==200){ 
                    setMsg(false) 
                    navigate('/mainpage')
                }
            }

            else if(result.status!=200){
                setMsg(true)
            }

        console.log(result);
        // .then((result) => {
        }

        // const handleLogin = async () => {
        //     let result = await fetch(`https://localhost:44351/api/Users/${email},${password}`)
        //     if(result.status!=200){
        //         // setError("Invalid email or password");
        //         setMsg(true)
        //     }
        //     else{
        //         setMsg(false);
        //         navigate('/mainpage');
        //     }
        //     result=await result.json();
        //     console.log(result);
        //     localStorage.setItem("user", JSON.stringify(result))
        //     // .then((result) => {
        //     if (email === 'admin@gmail.com' && password === 'Admin@123') {
        //         console.log('hi')
        //         localStorage.setItem("user", JSON.stringify(result))
        //         navigate('/admin');
        //     }
        //     else{
        //         //setData(result.data)
        //         //alert(result.data.userId)
        //         //mainpage();
        //         navigate('/mainpage')
        //     }
    
        // }


    return ( 
        <div className="main-login-container">
        <div className="icons-container">
            <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
        </div>
        <div className="email-pass">
            
                <input className="main-e" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                <input className="main-p" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
        </div>
        {msg && <p style={{color : 'red' }}> Invalid Email or Password  </p>}
        <div className="login-but">
            <div className="new">
                <a href="/forgot"> Forgot password? </a>
            </div>
            <button className="l-button" onClick={()=>handleLogin()}>Login</button>
        </div>
    </div>
     );
}
 
export default Login;