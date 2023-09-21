import { useNavigate } from 'react-router-dom';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faRightFromBracket, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {

    const Navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.clear();
        window.location.reload(true);
    }

    return (

        <div className="drop-container">
            {/* <div className="drop-button">
                <FontAwesomeIcon icon={faUser}/>
                <button className="drop-button">Profile</button>
            </div> */}
            
                <div className="drop-button">
                <FontAwesomeIcon icon={faTicket}/>
                <button className="drop-button" onClick={()=>Navigate('/mytickets')}>My Tickets</button>
                </div>

                <div className="drop-button">
                    <FontAwesomeIcon icon={faRightFromBracket}/>                
                    <button className="drop-button" onClick={()=> handleLogout()} >Logout</button>
                </div>

        </div>
    );
}
 
export default Dropdown;