import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminPage.css'
import { faPlaneDeparture, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';
import AllUsers from './AllUsers';
import Tickets from './Tickets';
import AdminTickets from './AdminTickets';
import AdminFlights from './AdminFlights';

const AdminPage = () => {

    const [user,setUser]=useState([]);
    const [ticket,setTicket]=useState([]);
    const [displayuser,setDisplayU]=useState(false);
    const [displayticket,setDisplayT]=useState(false);
    const [flight,setFlight]=useState([]);
    const [displayflight,setDisplayF]=useState(false);


    const handleUsers=()=>{
        axios.get("https://localhost:44351/api/Users")
        .then(result=>{
            setUser(result.data)
        })
        setDisplayT(false);
        setDisplayF(false)
        setDisplayU(true);
        console.log('hi')
    }

    const handleTickets=()=>{
        axios.get("https://localhost:44351/api/Ticket")
        .then(result=>{
            setTicket(result.data)
        })
        setDisplayU(false);
        setDisplayF(false)
        setDisplayT(true);
        console.log(ticket)
    }
    const handleFlights=()=>{
        axios.get("https://localhost:44351/api/Flights")
        .then(result=>{
            setFlight(result.data)
        })
        setDisplayU(false);
        setDisplayT(false);
        setDisplayF(true)
    }



    return ( 
        <div className="a-page">
            <div className="a-header">
                <div className="mytickets-logo">
                <b className="mytickets-b"><FontAwesomeIcon icon={faPlaneDeparture}/>AirTicket</b>
                </div>
                <div className="mytickets-buttons">
                    <button className="mytickets-home">Logout</button>
                </div>
            </div>
            <div className="a-buttons">
                <button className='ad-buttons' onClick={()=>handleUsers()}><FontAwesomeIcon icon={faUser} />Users</button>
                <button className='ad-buttons' onClick={()=>handleTickets()}><FontAwesomeIcon icon={faTicket} />Tickets</button>
                <button className='ad-buttons' onClick={()=>handleFlights()}><FontAwesomeIcon icon={faPlaneDeparture} />Flights</button>
            </div>
            <div className="a-content">
            {displayuser && user.map(user =>
                    <AllUsers user={user} key={user.userId}/>
                 )} 

            {displayticket && ticket.map(item =>
                    <AdminTickets item={item} key={item.ticketId}/>
                 )} 
        
            {displayflight && flight.map(item =>
                        <AdminFlights item={item} key={item.flight_number}/>
                    )} 
            
            </div>
            
        </div>
     );
}
 
export default AdminPage;
