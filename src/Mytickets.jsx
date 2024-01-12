import { faCircleQuestion, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Mytickets.css';
import axios from "axios";
import { useEffect, useState } from "react";
import tickets from "./Tickets";
import Tickets from "./Tickets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import airIndia from './Images/airindia.jpg'
import airAsia from './Images/airasia.jpg'
import indigo from './Images/indigo.jpg'
import spicejet from './Images/spicejet.jpg'
import vistara from './Images/vistara.jpg'





const Mytickets = () => {

    //const user = useSelector((state)=>state.user.value)

    const user=JSON.parse(localStorage.getItem('user'));
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    const [t,setT]=useState(false);
    const token=localStorage.getItem('token');



    useEffect(()=>{
        // axios.get(`https://localhost:44351/api/Ticket/${user.userId}`,{ headers: {"Authorization" : `Bearer ${token}`} })
        axios.get(`https://localhost:44351/api/Ticket/${user.userId}`)
        .then(result=>{
            setData(result.data.reverse())
        })
        .catch(error=>{
            setT(true)
            console.log(error)
        })
        console.log(data) 
    },[data])

    return (  
        <div className="mytickets-container">
            <div className="mytickets-header">
                <div className="mytickets-logo">
                <b className="mytickets-b"><FontAwesomeIcon icon={faPlaneDeparture}/>AirTicket</b>
                </div>
                <div className="mytickets-buttons">
                    <FontAwesomeIcon className='mytickets-home'icon={faCircleQuestion}/>
                    <button className="mytickets-home" onClick={()=>navigate("/mainpage")}>Home</button>
                    <button className="mytickets-home">{user.name}</button>
                </div>
            </div>   
            {t ? <div className="no-tic"><h3>No tickets booked yet ☹ </h3></div> :
            <div className="tickets">
                 {data.map(item =>
                    <Tickets item={item} key={item.ticketId} data={data}/>
                 )}     
            </div>        
}
        </div>
    );
}
 
export default Mytickets;


