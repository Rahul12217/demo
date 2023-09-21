import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tickets.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Tickets = ({item}) => {

    const navigate=useNavigate();

    const handleDownload=()=>{
        localStorage.setItem('print',JSON.stringify(item))
    }

    const handleCancel=(id)=>{
        axios.delete(`https://localhost:44351/api/Ticket/${id}`)
        window.location.reload();
    }

    return (  
         <div className="list-container">
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
                <button className="book-button" onClick={()=>{window.open('http://localhost:3000/print','_blank');handleDownload()}}>Download</button>
                <button className="book-button" onClick={()=>handleCancel(item.ticketId)}>Cancel</button>
            </div>

        </div>
    );
}

export default Tickets;