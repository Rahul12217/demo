import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminTickets.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AllUsers from './AllUsers';


const AdminTickets = ({item}) => {


    const handleCancel=(id)=>{
        alert('Ticket Cancelled')
        axios.delete(`https://localhost:44351/api/Ticket/${id}`)
    }

    return (  
        <div className="a-t-main">
            <div className="a-ticket-container">
                <div className="parts">
                    <div className="first-part">
                        <div className="airline-date">
                        <b>{item.airline}</b>
                        <b>{item.departureDate.slice(0,10)}</b>
                        </div>
                        <div className="second-part">
                            <div className="departure">
                                <p className="dtime">{item.departureTime}</p>
                                <p className='place'>{item.from}</p>
                            </div>
                            <div className="arrow">
                            <p><FontAwesomeIcon icon={faArrowRight}/> </p> </div>
                            <div className="arrival">
                                <p className="dtime">{item.arrivalTime}</p>
                                <p className='place'>{item.to}</p>
                            </div>
                        </div>
                    </div>

                    <div className="third-part">
                        {/* <p> <b>UserId :</b> {item.userId}</p> */}
                        <button className="book-button" onClick={()=>handleCancel(item.ticketId)}>Cancel</button>
                    </div>
                </div>

                <div className="user-tickets-dets">
                    {/* <h3>User Details :</h3> */}
                    <div className="t-users-page">
                        <div className="t-user-card">
                            <p1> <b>UserId</b>: {item.userId} </p1>
                            <p2> <b>Passenger Name</b>: {item.passengerName} </p2>
                            <p3> <b>Email</b>: {item.email} </p3>
                            <p4> <b>Age</b>: {item.age} </p4>
                            <p> <b>Phone</b>: {item.phone} </p>
                        </div>         
                </div>
                </div>

            </div>

        </div>
    );
}

export default AdminTickets;