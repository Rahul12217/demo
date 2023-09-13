import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.css";
import {
  faBed,
  faCab,
  faEarth,
  faGlobe,
  faLocation,
  faLocationDot,
  faPlaneDeparture,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import delhi from "./Images/New_Delhi.jpg";
import Hyd from "./Images/Hyd.jpg";
import goa from "./Images/Goa.jpg";
import chennai from "./Images/chennai.jpg";
import jaipur from "./Images/jaipur.jpg";
import axios from "axios";
import { useState } from "react";

const Mainpage = () => {
  const [from, setFrom] = useState("");
  const [to,setTo]=useState("");
  const [date,setDate]=useState('');
  const Navigate = useNavigate;
  const [data,setData]=useState([]);
  const [flight,setFlight]= useState([]);

  const handleSearch = (from,to,date) => {
    axios.get(`https://localhost:44351/api/Flights/${from}/${to}/${date}`)
    .then(result=>{
        setData(result.data);
        console.log(result.data)
        localStorage.setItem("search",JSON.stringify(result.data))
        setFlight(localStorage.getItem('search'))
    })
    console.log(flight)
  };

  return (
    <div className="page">
      <div className="header">
        <div className="main">
          <div className="logo">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>AirTicket</span>
          </div>
          <div className="login-container">
            <FontAwesomeIcon icon={faUser} />
            <button className="Login-button">Register</button>
            <button className="Login-button">Login</button>
          </div>
        </div>
        <div className="caption">
          Millions of cheap flights. One simple search.
        </div>

        <div className="search-bar">
          <div className="search-items">
            <div className="search-input"> 
              <FontAwesomeIcon icon={faLocationDot} />
              <input className="From" type="text" placeholder="From" onChange={e=>setFrom(e.target.value)}/>
            </div>
            <div className="search-input">
              <FontAwesomeIcon icon={faLocationDot} />
              <input type="text" placeholder="To" onChange={e=>setTo(e.target.value)} />
            </div>
            <div className="search-input">
              <input type="date"
                // showIcon
                dateFormat="yyyy-MM-dd"
                onChange={e=>setDate(e.target.value)}
                // selected={date}
                // onSelect={(d)=>setDate(d)}
                // minDate={new Date()}
              />
            </div>
          </div>
          <div className="search-class">
            <button className="search-button" onClick={()=>handleSearch(from,to,date)}>
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="explore">
        <button className="explore-button">
          <FontAwesomeIcon icon={faBed} />
          Hotels
        </button>
        <button className="explore-button">
          <FontAwesomeIcon icon={faCab} />
          Cabs
        </button>
        <button
          className="explore-button"
          onClick={() =>
            window.open(
              "https://www.easemytrip.com/blog/places-to-visit-in-september-in-india",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon icon={faEarth} />
          Explore Places
        </button>
      </div>

      <div className="destinations">
        <div className="d-caption">
          <b>Trending Destinations</b>
        </div>
        <div className="first-row">
          <div className="image-container">
            <img className="img1" src={delhi} alt="" />
            <h1 className="delhi">New Delhi</h1>
          </div>
          <div className="image-container">
            <img className="img1" src={Hyd} alt="" />
            <h1 className="delhi">Hyderabad</h1>
          </div>
        </div>
        <div className="second-row">
          <div className="image-container2">
            <img className="img2" src={goa} alt="" />
            <h1 className="goa">Goa</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={chennai} alt="" />
            <h1 className="goa">Chennai</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={jaipur} alt="" />
            <h1 className="goa">Jaipur</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Mainpage;
