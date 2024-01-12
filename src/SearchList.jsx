import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchList.css'
import { faArrowAltCircleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import airIndia from './Images/airindia.jpg'
import airAsia from './Images/airasia.jpg'
import indigo from './Images/indigo.jpg'
import spicejet from './Images/spicejet.jpg'
import vistara from './Images/vistara.jpg'

const SearchList = ({ item }) => {

    const user = JSON.parse(localStorage.getItem('user'));
    const airline = item.airline;
    // console.log(a[airline])
    //const user = useSelector((state)=> state.user.value);

    const navigate = useNavigate();
    const handleBook = (flight_number) => {
        if (user) {
            axios.get(`https://localhost:44351/api/Flights/${flight_number}`)
                .then(result => {
                    console.log(result)
                    localStorage.setItem('flight', JSON.stringify(result.data));
                    navigate('/ticketdetails')
                })
        }
        else alert('login to contiue')
    }

    return (
        <div className="list-container">
            <div className="first-part">
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:20,marginLeft:20}}>
                    <img  src={require(`./Images/${item.airline.toLowerCase()}.jpg`)} style={{ height: 40, width: 40,marginTop:25 }} />
                    <p>{item.airline}</p>
                </div>
                <div className="second-part">
                    <div className="departure">
                        <p className="dtime">{item.departureTime}</p>
                        <p className='place'>{item.from}</p>
                    </div>
                    <div className="arrow">
                        <p><FontAwesomeIcon icon={faArrowRight} /> </p> </div>
                    <div className="arrival">
                        <p className="dtime">{item.arrivalTime}</p>
                        <p className='place'>{item.to}</p>
                    </div>
                </div>
            </div>

            <div className="third-part">
                <p className="fare">{item.fare}</p>
                <button className="book-button" onClick={() => handleBook(item.flight_number)}>Book</button>
            </div>

        </div>
    );
}

export default SearchList;