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
import { useActionData, useNavigate } from "react-router-dom";
import delhi from "./Images/New_Delhi.jpg";
import Hyd from "./Images/Hyd.jpg";
import goa from "./Images/Goa.jpg";
import chennai from "./Images/chennai.jpg";
import jaipur from "./Images/jaipur.jpg";
import axios from "axios";
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Mainpage = () => {
  const [from, setFrom] = useState("");
  const [to,setTo]=useState("");
  const [date,setDate]=useState('');
  const Navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const userdata=JSON.parse(localStorage.getItem("user"))
  // console.log(userdata.name)

  const handleLogin=()=>{
    axios.get(`https://localhost:44351/api/Users/${email},${password}`)
    .then(result=>{
      localStorage.setItem("user",JSON.stringify(result.data))
      Navigate('/mainpage')
    })
  }

  const handleSearch = (from,to,date) => {
    const data={
      'from':from,'to':to,'date':date
    }
    // console.log(data)
        localStorage.setItem("search",JSON.stringify(data))
        Navigate('/search')
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
            {userdata ? <div className="account">
              <button className="account-button">{userdata.name}</button>
            </div>: <div>
            <button className="Login-button">Register</button>
              <Popup trigger=
                {<button className="Login-button">Login</button>}
                modal nested>
                {
                    close => (
                      <div className="main-login-container">
                      <div className="icons-container">
                          <b><FontAwesomeIcon icon={faPlaneDeparture}/> AirTicket</b>
                      </div>
                      <div className="email-pass">
                          
                              <input className="main-e" type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                              <input className="main-e" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                      </div>
                      <div className="login-but">
                          <div className="new">
                              <a href="/register"> Create Account</a>
                          </div>
                          <button className="l-button" onClick={()=>handleLogin()}>Login</button>
                      </div>
                  </div>
                    )
                }
              </Popup>
            </div>
            }
          </div>
        </div>
        <div className="caption">
          Millions of cheap flights. One simple search.
        </div>

        <div className="search-bar">
          <div className="search-items">
            <div className="search-input"> 
              <FontAwesomeIcon icon={faLocationDot} />
              <input className="searchFrom" type="text" placeholder="From" onChange={e=>setFrom(e.target.value)}/>
            </div>
            <div className="search-input">
              <FontAwesomeIcon icon={faLocationDot} />
              <input className="searchFrom" type="text" placeholder="To" onChange={e=>setTo(e.target.value)} />
            </div>
            <div className="search-input">
              <input type="date"
                className="searchFrom"
                // showIcon
                placeholder="Departure Date"
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
            <img className="img1" src={delhi} alt="" onClick={()=>
            window.open("https://www.tripadvisor.in/Attractions-g304551-Activities-New_Delhi_National_Capital_Territory_of_Delhi.html","_blank")}/>
            <h1 className="delhi">New Delhi</h1>
          </div>
          <div className="image-container">
            <img className="img1" src={Hyd} alt="" onClick={()=>
            window.open("https://www.tripadvisor.in/Attractions-g297586-Activities-Hyderabad_Hyderabad_District_Telangana.html","_blank")}/>
            <h1 className="delhi">Hyderabad</h1>
          </div>
        </div>
        <div className="second-row">
          <div className="image-container2">
            <img className="img2" src={goa} alt="" onClick={()=>
            window.open("https://www.tripadvisor.in/Attractions-g297604-Activities-Goa.html","_blank")}/>
            <h1 className="goa">Goa</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={chennai} alt="" onClick={()=>
            window.open("https://www.tripadvisor.in/Attractions-g304556-Activities-Chennai_Madras_Chennai_District_Tamil_Nadu.html","_blank")}/>
            <h1 className="goa">Chennai</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={jaipur} alt="" onClick={()=>
            window.open("https://www.tripadvisor.in/Attractions-g304555-Activities-Jaipur_Jaipur_District_Rajasthan.html","_blank")}/>
            <h1 className="goa">Jaipur</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Mainpage;
