import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {

    const [email,setEmail]=useState('');
    const [otp,setotp]=useState(0)
    const [np,setnp]=useState('')

    const handledp=(value)=>{
        setotp(parseInt(value))
    }

    const handleOtp=()=>{
        axios.put(`https://localhost:44351/api/Users/${email}`)
    }

    const handleChange=()=>{
        axios.put(`https://localhost:44351/api/Users/${otp},${email},${np}`)
    }

    return (  
        <>
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={()=>handleOtp()}>send otp</button>
        <input type="text" onChange={(e)=>handledp(e.target.value)}/>
        <input type="text" onChange={(e)=>setnp(e.target.value)} />
        <button onClick={()=>handleChange()}>Change password</button>
        </>
    );
}
 
export default ForgotPassword;
