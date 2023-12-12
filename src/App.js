import { Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "./MainPage";
import SearchedFlight from "./SearchedFlights";
import SearchList from "./SearchList";
import Login from "./Login";
import Dropdown from "./Dropdown";
import Mytickets from "./Mytickets";
import TicketDetails from "./TicketDetails";
import AdminPage from "./AdminPage";
import AllUsers from "./AllUsers";
import AddFlight from "./AddFLight";
import Print from "./Print";
import ForgotPassword from "./forgot";
import { useSelector } from "react-redux";

function App() {

  const port1=44351;
  const port2=5001;

  // localStorage.setItem()
  localStorage.setItem("port", JSON.stringify(port1))

  const user=JSON.parse(localStorage.getItem('user'))
  //const user= useSelector((state) => state.user.value);
  console.log('hi')
  console.log(user)
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/mainpage" />}></Route>
      <Route exact path="/mainpage" element={<Mainpage/>}></Route>

      <Route exact path="/search" element={<SearchedFlight/>}></Route>
      {user ?<Route exact path="/searchlist" element={<SearchList/>}></Route> : <></>}
      {user ?<Route exact path="/drop" element={<Dropdown/>}></Route>: <></>}
      {user ?<Route exact path='/mytickets' element={<Mytickets/>}></Route>: <></>}
      {user ?<Route exact path='/ticketdetails' element={<TicketDetails/>}></Route>: <></>}
      <Route exact path='/admin' element={<AdminPage/>}></Route>: <></>
      {user ?<Route exact path='/users' element={<AllUsers/>}></Route>: <></>}
      {user ?<Route exact path='/add' element={<AddFlight/>}></Route> : <></>}
      <Route exact path='/print' element={<Print/>}></Route>

      <Route exact path="/forgot" element={<ForgotPassword/>} />
    </Routes>
    </>
  );
}

export default App;
