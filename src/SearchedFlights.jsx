import { useEffect, useState } from 'react';
import './SearchedFlights.css'
import axios from 'axios';
import { faMagnifyingGlass,  faPlaneDeparture,  faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchList from './SearchList';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Dropdown from './Dropdown';
import Register from './Register';
import {search} from './Redux/Search';
import {login} from './Redux/user'
import { useDispatch, useSelector } from 'react-redux';



const SearchedFlight = () => {

    const [data,setData]=useState([]);

    const dispatch = useDispatch();
    
   //const user = useSelector((state)=> state.user.value)

//    const search = useSelector((state)=> state.search.value)
const user=JSON.parse(localStorage.getItem('user'));


    const search=JSON.parse(localStorage.getItem('search'));
    const Navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    console.log(search)

    const handleLogin=()=>{
        axios.get(`https://localhost:44351/api/Users/${email},${password}`)
        .then(result=>{
         dispatch(login({name: result.data.name,password:  result.data.password,email:  result.data.email,phone:  result.data.phone,userId:  result.data.userId}))
          localStorage.setItem("user",JSON.stringify(result.data))
          Navigate('/search')
        })
        .catch(error=>
            {
                console.log(error)
            })
      }

  const userdata=JSON.parse(localStorage.getItem("user"))



    useEffect(()=>{
        axios.get(`https://localhost:44351/api/Flights/${search.from}/${search.to}/${search.date}`)
        .then(result=>{
            setData(result.data);
            //console.log(result.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    //console.log(data)
    return (  
        <div className="search-page">

            <div className="search-header">
                <div className="sh-items">
                    <div className="sh-logo" onClick={()=>Navigate('/mainpage')} style={{cursor:'pointer'}}>
                            <FontAwesomeIcon icon={faPlaneDeparture} />
                            <span >AirTicket</span>
                        </div>
                    <div className="sh-buttons">
                        <FontAwesomeIcon icon={faUser} />
                            {user ?<div className="account-popup">
              <Popup className="account-popup" trigger=
                {<button className="account-button">{user.name}</button>}
                >
                {
                    account => (
                      <Dropdown/>
                    )
                }
              </Popup>
            </div>:
                    <div className='sh-buttons'>
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <Popup trigger=
                            {<button className="sh-login">Register</button>}
                            modal nested>
                            {
                                close => (
                                <Register/>    
                                )
                            }
                    </Popup>
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
                <p><b>  {search.from} - {search.to}</b></p>    
                <p>{(search.date)}</p>          
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

