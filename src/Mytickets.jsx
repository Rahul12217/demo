import { faCircleQuestion, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Mytickets.css';
import axios from "axios";
import { useEffect, useState } from "react";
import tickets from "./Tickets";
import Tickets from "./Tickets";
import { useNavigate } from "react-router-dom";

const Mytickets = () => {

    const user=JSON.parse(localStorage.getItem('user'));
    const [data,setData]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`https://localhost:44351/api/Ticket/${user.userId}`)
        .then(result=>{
            setData(result.data.reverse())
        })
        console.log(data) 
    },[])

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
            <div className="tickets">
                 {data.map(item =>
                    <Tickets item={item} key={item.ticketId}/>
                 )}     
            </div>        
        </div>
    );
}
 
export default Mytickets;


