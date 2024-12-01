import { Link, Outlet } from "react-router-dom";
import logo from "../images/lo1.jpg";
import l1 from "../images/l1.webp";
import l2 from "../images/l2.webp";




const Layout=()=>{
    return(
        <>
        <div id="navbar" style={{marginTop:'50px'}}>
      <img src={logo} alt='' width={100} height={80}/>
      <Link to="home" style={{textDecoration: "none", color: "rgb(9, 139, 78)"}}>Home</Link>
      <Link to="insert" style={{textDecoration: "none", color: "rgb(9, 139, 78)"}}>Patient</Link>
      <Link to="display1" style={{textDecoration: "none", color: "rgb(9, 139, 78)"}}>Doctor</Link>
      <Link to="search" style={{textDecoration: "none", color: "rgb(9, 139, 78)"}}>Search</Link>
   <br/>
   
      <input type="text"  placeholder="Type Patien Name.."
      style={{color:"green",padding:"10px", width:"250px", height:"20px", borderRadius:"10px", border:"1px solid green"}}/>
     </div>


    <Outlet/>

    <div className="kart" style={{backgroundColor:'black' , color:'white'}}>
<h3 style={{textAlign:'center' , fontSize:'35px' }}>Take Care Or Your Health</h3>
<div className="foot" style={{marginTop:'50px'}}>
    <div>
    <p><b>Company</b></p>
    <ul type="none">
                <li>About us</li>
                <li>Terms & conditions </li>
                <li>Privacy policy </li>
                <li>Anti-discrimination policy </li>
                <li>UC impact </li>
                <li>Careers </li>
            </ul>
        </div>

        <div>
            <p><b>For customers</b></p>
            <ul type="none">
                <li>UC reviews </li>
                <li>Categories near you </li>
                <li>Blog </li>
                <li>Contact us </li>

            </ul>
        </div>

        <div>
            <p><b>For partners</b></p>
            <ul type="none">
        <li>Register as a professional </li>
            </ul>
        </div>

        <div className="link">
            <p><b>Social links</b></p>
           <img src= {l1}/>
            <br/>
            <img src={l2}/>
        </div>
</div>

<hr/>
<div className="mail"><p>© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</p></div>

</div>
   </>
    )
}

export default Layout;