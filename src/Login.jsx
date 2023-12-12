// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./Redux/user.js"

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(false);
    const [loading, setLoad] = useState(false);

    const port = localStorage.getItem("port")

    // console.log(port)


    const handleLogin = async () => {

    const data = {email: email,password: password};


        let result = await axios.post(`https://localhost:44351/api/Login`,data)
        let user = await axios.get(`https://localhost:44351/api/Users/${email},${password}`)
        //console.log(typeof(result.data))
        let a = await user.data;
        // console.log(a)
        dispatch(login({name: a.name,password: a.password,email:a.email,phone: a.phone,userId: a.userId}))
        

        localStorage.setItem("token", result.data)
        localStorage.setItem("user",JSON.stringify(user.data))


        if (email.length != 0 && password.length != 0 && result.status == 200) {
            if (email === 'atAdmin@gmail.com' && password === 'Admin@123') {
                setMsg(false)
                console.log('hi')
                navigate('/admin');
            }
            else if (email.length != 0 && password.length != 0 && result.status == 200) {
                setMsg(false)
                navigate('/mainpage')
            }
        }

        else if (result.status != 200) {
            setMsg(true)
        }

        // console.log(result);
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
                <b><FontAwesomeIcon icon={faPlaneDeparture} /> AirTicket</b>
            </div>
            <div className="email-pass">

                <input className="main-e" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input className="main-p" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </div>
            {msg && <p style={{ color: 'red' }}> Invalid Email or Password  </p>}
            <div className="login-but">
                <div className="new">
                    <a href="/forgot"> Forgot password? </a>
                </div>
                <button className="l-button" onClick={() => { handleLogin() }}>Login</button>
            </div>
        </div>
    );
}

export default Login;