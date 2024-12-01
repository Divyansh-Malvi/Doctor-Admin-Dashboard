import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Insert from "./Components/Insert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Components/Display";
import Display1 from "./Components/Display1";
import EditData from "./Components/Edit";
import Search from "./Components/Search";

const App=()=>{
  return(
    <>
    <div  id="main">
  <h1 align="center" style={{color:'black'}} >Online Doctor Appointment Scheduling </h1>
  <div id="main1">
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path="home" element={<Home/>}/>
     <Route path="insert" element={<Insert/>}/>
     <Route path="display" element={<Display/>}/>
     <Route path="display1" element={<Display1/>}/>
     <Route path="search" element={<Search/>}/>
     <Route path="editrec/:myid" element={<EditData/>}/>
      </Route>  
      </Routes>
    </BrowserRouter>
    </div>
    </div>
 
    </>
  )
}
export default App;