import { faCircleQuestion, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './TicketDetails.css'
import { useState } from "react";
import axios from "axios";

const TicketDetails = () => {
    
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const  [email,setEMail]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');

    const handleAge=(value)=>{
        setAge(parseInt(value))
    }

    const handleG=(value)=>{
        setGender(value)
    }

    // console.log(gender)
    const handleBook=()=>{

        const data={
            UserId: user.userId,
            From: fare.from,
            To: fare.to,

            DepartureDate: fare.departureDate,
            DepartureTime: fare.departureTime,
            ArrivalTime: fare.arrivalTime,
            Airline: fare.airline,
            Fare:fare.fare,
            PassengerName:name,
            Age:age,
            Gender:gender,
            PassengerEmail:email,
            PassengerPhone: phone,
            Flight_number:fare.flight_number
        }
        console.log(data)

        axios.post('https://localhost:44351/api/Ticket',data)
        .then(result=>{
            console.log(result)
            navigate('/mytickets')
        })
    }

    const user=JSON.parse(localStorage.getItem('user'));
    const navigate=useNavigate();
    const fare=JSON.parse(localStorage.getItem('flight'))

    return (  
        <div className="ticket-details-page">
            <div className="ticket-details-header">
                <div className="ticket-details-logo">
                    <b className="ticket-details-b"><FontAwesomeIcon icon={faPlaneDeparture}/>AirTicket</b>
                </div>
                <div className="ticket-details-buttons">
                    <FontAwesomeIcon className='ticket-details-home'icon={faCircleQuestion}/>
                    <button className="ticket-details-home" onClick={()=>navigate("/mainpage")}>Home</button>
                    <button className="ticket-details-home">{user.name}</button>
                </div>
            </div>
            <div className="who">
                <h1>{fare.from} to {fare.to}</h1>
            </div>

            <div className="fly">
                <h2>Who's flying?</h2>
            </div>

            <div className="details-container">
                <div className="contact-fare">
                    <div className="contact-details">
                        <h2>Passenger details</h2>
                        <div className="contact-input-fields">
                            <div className="contact-email">
                                <b><inputLabel>Contact email</inputLabel></b>
                                <input type="email" className="contact-email-input" placeholder="Email" onChange={e=>setEMail(e.target.value)} />
                            </div>
                            <div className="contact-phone">
                                <b><inputLabel>Phone number</inputLabel></b>
                                <input type="text" className="contact-phone-input" onChange={e=>setPhone(e.target.value)}/>
                            </div>
                        </div>
                    </div>

                    <div className="fare-details">
                        <h3>Price breakdown :</h3>
                        <div className="ab">
                        <div className="fare-tax">
                            <b>Ticket</b>
                            <p>Flight fare</p>
                            <p>Taxes and fees</p>
                            <h1>Total</h1>
                        </div>
                        <div className="amount">
                            <b>INR {fare.fare}</b>
                            <p>INR {fare.fare*.75}</p>
                            <p>INR {fare.fare*.25}</p>
                            <h1>INR {fare.fare}</h1>
                        </div>
                        </div>
                        <button className="main-book" onClick={()=>handleBook()}>Book</button>
                    </div>
                </div>
                <div className="name-age">
                    <div className="n-a">
                        <b><inputLabel>Full Name</inputLabel></b>
                        <input type="text" className="name-age-input"  onChange={e=>setName(e.target.value)}/>
                    </div>

                    <div className="n-a">
                        <b><inputLabel>Age</inputLabel></b>
                        <input type="text" className="name-age-input" onChange={e=>handleAge(e.target.value)}/>
                    </div>

                    <div className="n-a">               
                        <b><inputLabel>Gender</inputLabel></b>
                        <select  className="gender" value={gender} onChange={e=>handleG(e.target.value)}>
                            <option value="Gender">Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default TicketDetails;