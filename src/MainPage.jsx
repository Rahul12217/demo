import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.css";
import {
  faBars,
  faBed,
  faCab,
  faCalendar,
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
import { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import { faLine } from "@fortawesome/free-brands-svg-icons";
import Dropdown from "./Dropdown";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
// import 'reactjs-popup/dist/index.css';
import {searchActions} from "./Redux/Search"



const Mainpage = () => {
  
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const Navigate = useNavigate();
  const [dd, setdd] = useState(false);
  const [dd2, setdd2] = useState(false);

  // const userdata = JSON.parse(localStorage.getItem("user"))
  // console.log(userdata.name)

  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.user.value);
   
  //22-11-2023 
   //console.log(userdata)


  const data = ["vizag", "hyderabad", "chennai", "banglore", "mumbai", "pune", "delhi"];


  const [fd, setfd] = useState([]);

  const filter1 = (e) => {
    setFrom(e.target.value)
    setfd(data.filter(x => x.toLowerCase().includes(e.target.value)));
  }
  const filter2 = (e) => {
    setTo(e.target.value)
    setfd(data.filter(x => x.toLowerCase().includes(e.target.value)));
  }
  // console.log(to)
  useEffect(() => {
    setDate(
      `${startDate.getFullYear()}-${parseInt(startDate.getMonth() + 1)}-${startDate.getDate()}`
    )
  }, [startDate])


  const handleSearch = (from, to, date) => {
    const data = {
      'from': from, 'to': to, 'date': date
    }
    
    dispatch(searchActions.search({from : from ,to : to,date : date}))


    // console.log(data)
    localStorage.setItem("search", JSON.stringify(data))

    Navigate('/search')
  };

  // console.log(date)

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
            {userdata ?
              <div className="account-popup">
                <Popup className="account-popup" trigger=
                  {<button className="account-button">{userdata.name}</button>}
                >
                  {
                    account => (
                      <Dropdown />
                    )
                  }
                </Popup>
              </div> :
              <div>
                <Popup trigger=
                  {<button className="Login-button">Register</button>}
                  modal nested>
                  {
                    close => (
                      <Register />
                    )
                  }
                </Popup>
                <Popup trigger=
                  {<button className="Login-button">Login</button>}
                  modal nested>
                  {
                    close => (
                      <Login />
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
              <input className="searchFrom" type="text" placeholder="From" value={from} onClick={() => { setdd(true); setdd2(false) }} onChange={filter1} />
            </div>
            <div className="search-input">
              <FontAwesomeIcon icon={faLocationDot} />
              <input className="searchFrom" type="text" placeholder="To" value={to} onClick={() => { setdd2(true); setdd(false) }} onChange={filter2} />
            </div>
            <div className="search-input">
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
                // showIcon
                placeholderText="Departure date"
                dateFromat='YYYY-MM-dd'
                selected={startDate}
                onChange={(date) => setStartDate(date)}


              />
            </div>
          </div>
          <div className="search-class">
            <button className="search-button" onClick={() => handleSearch(from, to, date)}>
              <FontAwesomeIcon icon={faSearch} />
              Search
            </button>
          </div>
        </div>
      </div>
      {dd && from && <div className="from-dropdown">{fd.map(a => {
        return from && <p className="from-list" onClick={() => { setFrom(a); setdd(false) }} style={{ cursor: "pointer" }}>{a}</p>
      })}
      </div>}
      {dd2 && to && <div className="to-dropdown">{fd.map(a => {
        return to && <p className="from-list" onClick={() => { setTo(a); setdd2(false) }} style={{ cursor: "pointer" }}>{a}</p>
      })}
      </div>}

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
            <img className="img1" src={delhi} alt="" onClick={() =>
              window.open("https://www.tripadvisor.in/Attractions-g304551-Activities-New_Delhi_National_Capital_Territory_of_Delhi.html", "_blank")} />
            <h1 className="delhi">New Delhi</h1>
          </div>
          <div className="image-container">
            <img className="img1" src={Hyd} alt="" onClick={() =>
              window.open("https://www.tripadvisor.in/Attractions-g297586-Activities-Hyderabad_Hyderabad_District_Telangana.html", "_blank")} />
            <h1 className="delhi">Hyderabad</h1>
          </div>
        </div>
        <div className="second-row">
          <div className="image-container2">
            <img className="img2" src={goa} alt="" onClick={() =>
              window.open("https://www.tripadvisor.in/Attractions-g297604-Activities-Goa.html", "_blank")} />
            <h1 className="goa">Goa</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={chennai} alt="" onClick={() =>
              window.open("https://www.tripadvisor.in/Attractions-g304556-Activities-Chennai_Madras_Chennai_District_Tamil_Nadu.html", "_blank")} />
            <h1 className="goa">Chennai</h1>
          </div>
          <div className="image-container2">
            <img className="img2" src={jaipur} alt="" onClick={() =>
              window.open("https://www.tripadvisor.in/Attractions-g304555-Activities-Jaipur_Jaipur_District_Rajasthan.html", "_blank")} />
            <h1 className="goa">Jaipur</h1>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Mainpage;
