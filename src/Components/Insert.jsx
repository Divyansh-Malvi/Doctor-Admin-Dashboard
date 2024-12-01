import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";

const Insert=()=>{
 const[input,setInput]=useState({});
    const navigate= useNavigate();

    const handlInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}));
    console.log(input);
}


    
    const handlSubmit=()=>{
        let api="http://localhost:3000/appoiment";
        axios.post(api,input).then((res)=>{
          console.log(res);
        toast.success("Save Data Successfully!!")
        })
        navigate("/display");
    }


    return(
        <>
         <div className="form">
        <h1 align="center">Book an Appoiment</h1>
        <div className="row1">    
 Appoiment No.    :  <input type="text" name= "appoimentno" onChange={handlInput}/>
 Patient Name      :  <input type="text" name="name" onChange={handlInput}/>
        </div><br/> <br/> 

<div className="row1">          
          Mobile No.   :  <input type="text" name="mobile" onChange={handlInput}/>
           City        :  <input type="text" name="city" onChange={handlInput}/>
    </div><br/> <br/> 

    <div className="row1">
      Date  :  <input type="date" name="date" onChange={handlInput}/>
     Time   :  <input type="time" name="time" onChange={handlInput}/>
    </div> <br/> <br/>

    <div className="row1"> 
     Specialists  :  <select name="specialists" onChange={handlInput}>
                        <option name="specialists" onChange={handlInput}>-Specialists-</option>
                        <option name="specialists" onChange={handlInput}>Cardiologist</option>
                        <option name="specialists" onChange={handlInput}>Dermatologist</option>
                        <option name="specialists" onChange={handlInput}>Pediatrician</option>
                        <option name="specialists" onChange={handlInput}>Gynecologist</option>
                        <option name="specialists" onChange={handlInput}>Orthopedic Surgeon</option>
                        <option name="specialists" onChange={handlInput}>Neurologist</option>
                    </select>
     Treatment   :    <select name="treatment" onChange={handlInput}>
                         <option name="specialists" onChange={handlInput}>- Treatment-</option>
                        <option name="specialists" onChange={handlInput}>Heart attacks</option>
                        <option name="specialists" onChange={handlInput}>skin cancer</option>
                        <option name="specialists" onChange={handlInput}>Vaccinations</option>
                        <option name="specialists" onChange={handlInput}>Menstrual disorders</option>
                        <option name="specialists" onChange={handlInput}> joint replacement surgeries</option>
                        <option name="specialists" onChange={handlInput}>, including brain</option>
                    </select>
     </div> <br/> <br/>
     <button onClick={handlSubmit}>Save Data</button>
        
        <ToastContainer/>
     </div>
        </>
    )
}
export default Insert;