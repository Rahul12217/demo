import { useEffect, useState } from 'react';
import './SearchedFlights.css'
import axios from 'axios';
import { faMagnifyingGlass,  faPlaneDeparture,  faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchList from './SearchList';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Dropdown from './Dropdown';

const SearchedFlight = () => {

    const [data,setData]=useState([]);
    const search=JSON.parse(localStorage.getItem('search'));
    const from=search.from;
    const to=search.to;
    const date = search.date;
    const Navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{
        axios.get(`https://localhost:44351/api/Users/${email},${password}`)
        .then(result=>{
          localStorage.setItem("user",JSON.stringify(result.data))
          Navigate('/search')
        })
      }

  const userdata=JSON.parse(localStorage.getItem("user"))


    useEffect(()=>{
        axios.get(`https://localhost:44351/api/Flights/${from}/${to}/${date}`)
        .then(result=>{
            setData(result.data);
            //console.log(result.data)
        })
    },[])

    //console.log(data)
    return (  
        <div className="search-page">

            <div className="search-header">
                <div className="sh-items">
                    <div className="sh-logo">
                            <FontAwesomeIcon icon={faPlaneDeparture} />
                            <span>AirTicket</span>
                        </div>
                    <div className="sh-buttons">
                        <FontAwesomeIcon icon={faUser} />
                            {userdata ?<div className="account-popup">
              <Popup className="account-popup" trigger=
                {<button className="account-button">{userdata.name}</button>}
                >
                {
                    account => (
                      <Dropdown/>
                    )
                }
              </Popup>
            </div>:
                    <div>
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <button className="sh-login">Register</button>
                        <Popup trigger=
                    {<button className="sh-login">Login</button>}
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
            </div>

            <div className="header2">
                <div className="search-icon" onClick={()=>navigate('/mainpage')}><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                <p><b>  {from} - {to}</b></p>    
                <p>{(date)}</p>          
            </div>

            <div className="results-container">
                {data.map(item=>
                    <SearchList item={item} key={item.flight_number}/>
                )}

            </div>
        </div>
    )
}
 
export default SearchedFlight











            {/* <table className="search-results">
                    <tbody>
                    {data.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td>{(item.airline)}</td>
                            <td>{item.flight_number}</td>
                            <td>{item.from}</td>
                            <td>{item.to}</td>
                            <td>{item.departureDate.slice(0,10)}</td>
                            <td>{item.departureTime}</td>
                            <td>{item.arrivalTime}</td>
                            <td>{item.fare}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table> */}