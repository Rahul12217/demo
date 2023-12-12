import axios from "axios";
import { useState } from "react";
import './forgot.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
// toast.configure()

const ForgotPassword = () => {

    const [email,setEmail]=useState('');
    const [otp,setotp]=useState(0)
    const [np,setnp]=useState('');
    const [cnp,setcnp]=useState('')
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const characters=['@','#','$','%','&','!','?']

    const handleInt=(value)=>{
        setotp(parseInt(value))
    }

    const handleOtp=()=>{
        axios.put(`https://localhost:44351/api/Users/${email}`)
        toast('check your mail for otp')
    }

    const handleChange=()=>{
        if(np==cnp && np.length>=8 && np.includes('@' ||'#' ||'$' || '%' || '&' || '!' || '?')){
            axios.put(`https://localhost:44351/api/Users/${otp},${email},${np}`)
            .then(result=>{
                setError('');
                toast('password changed successfully')    
                setTimeout(()=>navigate('/mainpage'),3000)
            })
            .catch(error=>{
                console.log(error)
                //setError('Incorrect otp')
            })

        }
        else if(!np.includes('@' ||'#' ||'$' || '%' || '&' || '!' || '?')){
            setError('password must contain a special chraacter')
        }
        else{
            setError("Passwords does not match")
        }
    }

    return (  
        <>
        <ToastContainer/>
        <div className="header-fp">
            <div className="header-fp-content">
                <div className="logo-fp" onClick={()=>navigate('/mainpage')} style={{cursor:"pointer"}}>
                    <FontAwesomeIcon icon={faPlaneDeparture}/>
                    <span>AirTicket</span>
                </div>
                <FontAwesomeIcon icon={faQuestionCircle} style={{color:'white',fontSize:"25px"}}/>
            </div>
        </div>

        <div className="cont">
            <h2>Create new password</h2>
            <p>Use a minimum of 8 characters, including uppercase letters, lowercase letters, and numbers.</p>
        </div>

        <div className="p-input">

            <div className="p1">
                <div className="label-c">
                <b><inputLabel>Email</inputLabel></b>
                <input className="pi" type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className="otp-btn" onClick={()=>handleOtp()}>OTP</button>
            </div>

            <div className="label-c">
            <b><inputLabel>OTP</inputLabel></b>
            <input className="pi" type="text" onChange={(e)=>handleInt(e.target.value)}/>
            </div>

            <div className="label-c">
            <b><inputLabel>New password</inputLabel></b>
            <input className="pp"   type="password" onChange={(e)=>setnp(e.target.value)} />
            </div>

            <div className="label-c">
            <b><inputLabel>Confirm password</inputLabel></b>
            <input  className="pp"  type="password" onChange={(e)=>setcnp(e.target.value)} />
            </div>

            { error && <p style={{color:'red'}} >{error}</p> }
            <button className="new-button" onClick={()=>handleChange()}>Change password</button>
        </div>
        </>
    );
}
 
export default ForgotPassword;
