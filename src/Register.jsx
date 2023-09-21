// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
    const Navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirm,setConfirm]=useState('');
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [data,setData]=useState([]);
    const [loading,setLoad]=useState(false)

    const handleRegister=()=>{
        setLoad(true)
        const data={
            Name:name,
            Password:password,
            Email:email,
            Phone:phone
        }

    //     if(name.length!=0 && password == confirm && email.includes('@') && email.includes('.com') && )
    axios.post(`https://localhost:44351/api/Users`,data)
    .then(result=>{
        window.location.reload(true)
        setLoad(false)
    })
    }
    return ( 
        <>
        {loading ? <div>Creating new account...</div> :<div className="main-login-container">
        <div className="icons-container">
                <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
            </div>
            <div className="email-pass">

                    <input className="main-e" type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                    <input className="main-e" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                    <input className="main-e" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <input className="main-e" type="password" placeholder="Confirm Password" onChange={e=>setConfirm(e.target.value)}/>
                    <input className="main-e" type="text" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>

            </div>
            <div className="login-but">
                <button className="l-button" onClick={()=>handleRegister()}>Register</button>
            </div>
        </div>}
    </>
     );
}
 
export default Register;