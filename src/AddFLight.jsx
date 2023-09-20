import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './AddFlight.css'

const AddFlight = () => {

    const [flightnumber, setFlight] = useState('');
    const [airline, setAirLine] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date());
    const [dtime,setDtime]=useState('');
    const [atime,setAtime]=useState('');
    const [fare, setFare] = useState('');
    // const Navigate=useNavigate();


    const handleAdd = () => {
        const data = {
            Flight_number: flightnumber,
            Airline: airline,
            From: from,
            To: to,
            DepartureDate: date,
            DepartureTime:dtime,
            ArrivalTime:atime,
            Fare: fare

        }
        console.log(data)
        axios.post('https://localhost:44351/api/Flights', data)
            .then((result) => {
                console.log(result.data)
                alert("Flight Added to the schedule");
                window.location.reload();
            }).catch((error) => {
                alert(error)
            })
    }
    return ( 
        <div className="add-page">
            <div className="add-container">
                <div className="add-inputs">
                    {/* <label>Flight Number</label> */}
                    <input type="text" id="Flight Number" className="add-i-h" placeholder="Flight Number" onChange={(e) => setFlight(e.target.value)} /> 
                    {/* <label>Airline</label> */}
                    <input type="text" id="Airline" className="add-i-h" placeholder="Airline" onChange={(e) => setAirLine(e.target.value)} />
                    {/* <label>From</label> */}
                    <input type="text" id="From" className="add-i-h" placeholder="From" onChange={(e) => setFrom(e.target.value)} /> 
                    {/* <label>To</label> */}
                    <input type="text" id="To" className="add-i-h" placeholder="To" onChange={(e) => setTo(e.target.value)} />
                    {/* <label>Departure Date</label> */}
                    <input type="date" className="add-i-d" placeholder="Date" onChange={(e) => setDate(e.target.value)} /> 
                    {/* <label>Departure Time</label> */}
                    <input type="text" className="add-i-h" placeholder="Departure Time" onChange={(e) => setDtime(e.target.value)} /> 
                    {/* <label>Arrival Time</label> */}
                    <input type="text" className="add-i-h" placeholder="Arrival Time" onChange={(e) => setAtime(e.target.value)} /> 
                    {/* <label>Fare</label> */}
                    <input type="text" className="add-i-h" placeholder="Fare" onChange={(e) => setFare(e.target.value)} /> 
                    
                    <div className="add-button">
                        <button className="add-b" onClick={()=>handleAdd()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default AddFlight;