// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

import { faPlaneDeparture, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoad] = useState(false);
    const [error, setError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleRegister = async () => {
        if (name.length != 0 && password == confirm && email.includes('@') && email.includes('.com') && password.length >= 8) {
            setLoad(true)
            const data = {
                Name: name,
                Password: password,
                Email: email,
                Phone: phone
            }
            axios.post(`https://localhost:44351/api/Users`, data)
                .then(result => {
                    // window.location.reload(true)
                    setLoad(false)
                })
                .catch(error => {
                    setLoad(false)
                    setError("Email already exists")
                    console.log(error)
                })
        }
        else if (name.length == 0) {
            setError('Enter the name')
        }
        else if (!email.includes('@') && email.includes('.com')) {
            setError('Enter a valid email address')
        }
        else if (password.length <= 8) {
            setError('password must be more than 8 characters')
        }
        else if (password != confirm) {
            console.log('e')
            setError('password and confirm password must be same')
        }


    }
    return (
        <>
            {loading ? <div className="loading-msg"><h3><FontAwesomeIcon icon={faSpinner} spinPulse />   Creating new account</h3></div> : <div className="main-login-container">
                <div className="icons-container">
                    <b><FontAwesomeIcon icon={faPlaneDeparture} /> AirTicket</b>
                </div>
                <div className="email-pass">

                    <input className="main-e" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                    {name.length === 0 && <p className="err" style={{ color: 'red' }}>Enter the name</p>}

                    <input className={`main-e ${error && !emailRegex.test(email) ? 'error' : ''}`} type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    {!emailRegex.test(email) && <p className="err" style={{ color: 'red' }}>Enter a valid email address</p>}

                    <input className="main-p" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    {password.length < 8 && <p className="err" style={{ color: 'red' }}> Password should be 8 characters </p>}

                    <input className="main-p" type="password" placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} />

                    <input className="main-e" type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
                    {phone.length === 0 && <p className="err" style={{ color: 'red' }}>Enter the phone number</p>}

                </div>

                {error && <p className="err" style={{ color: 'red' }}>{error}</p>}

                <div className="login-but">
                    <button className="l-button" onClick={() => handleRegister()}>Register</button>
                </div>
            </div>}
        </>
    );
}

export default Register;