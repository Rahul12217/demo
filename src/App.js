import { Route, Routes } from "react-router-dom";
import Mainpage from "./MainPage";
import SearchedFlight from "./SearchedFlights";
import SearchList from "./SearchList";
import Login from "./Login";
import Dropdown from "./Dropdown";
import Mytickets from "./Mytickets";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/mainpage" element={<Mainpage/>}></Route>
      <Route exact path="/search" element={<SearchedFlight/>}></Route>
      <Route exact path="/searchlist" element={<SearchList/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/drop" element={<Dropdown/>}></Route>
      <Route exact path='/mytickets' element={<Mytickets/>}></Route>
    </Routes>
    </>
  );
}

export default App;
