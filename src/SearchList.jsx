import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchList.css'
import { faArrowAltCircleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchList = ({item}) => {

    const navigate=useNavigate();
    const handleBook=(flight_number)=>{
        axios.get(`https://localhost:44351/api/Flights/${flight_number}`)
        .then(result=>{
            localStorage.setItem('flight',JSON.stringify(result.data));
            navigate('/ticketdetails')
        })
    }

    return ( 
        <div className="list-container">
            <div className="first-part">
                <b>{item.airline}</b>

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
                <p className="fare">₹3000</p>
                <button className="book-button" onClick={()=>handleBook(item.flight_number)}>Book</button>
            </div>

        </div>
     );
}
 
export default SearchList;