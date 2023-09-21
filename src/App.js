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

function App() {

  const user=JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Navigate replace to="/mainpage" />}></Route>
      <Route exact path="/mainpage" element={<Mainpage/>}></Route>
      <Route exact path="/search" element={<SearchedFlight/>}></Route>
      <Route exact path="/searchlist" element={<SearchList/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/drop" element={<Dropdown/>}></Route>
      <Route exact path='/mytickets' element={<Mytickets/>}></Route>
      <Route exact path='/ticketdetails' element={<TicketDetails/>}></Route>
      <Route exact path='/admin' element={<AdminPage/>}></Route>
      <Route exact path='/users' element={<AllUsers/>}></Route>
      <Route exact path='/add' element={<AddFlight/>}></Route>
      <Route exact path='/print' element={<Print/>}></Route>

    </Routes>
    </>
  );
}

export default App;
