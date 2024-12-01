import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const EditData=()=>{
    const {myid} =useParams();
    const[mydata , setMydata]=useState({});  // mydata me value object ke fome me ayegi {}
    const navigate= useNavigate();
    
 const loadData=()=>{
let api=`http://localhost:3000/appoiment/${myid}`;  //id ko target kiya he
axios.get(api).then((res)=>{
console.log(res.data);
setMydata(res. data)
})
} 

useEffect(()=>{
    loadData();
}, [])  
 
const handlInput=(e)=>{
let name=e.target.name;
let value=e.target.value;
setMydata(values=>({...values , [name]:value}));  //spreed opreater
console.log(mydata)
}
    
 const handlSubmit=()=>{
    let api=`http://localhost:3000/appoiment/${myid}`; 
    axios.put(api , mydata).then((res)=>{
        message.success("Data succesfully updated!!!");
        setMydata({
            appoimentno:"",
            name:"",
            city:"",
            mobile:"",
            time:"",
            date:"",
            specialists:"",
            treatmen:""
        })

    })
    navigate("/display");
 }   
    
    
    return(

        <>
        <div className="form" align="center" >
        <h1> Edit Appoiment  </h1>
        <div className="row1" >
     Appoiment No. : <input type="text" name="appoimentno" value={mydata.appoimentno} onChange={handlInput}/>
     Patient Name  : <input type="text" name="name" value={mydata.name} onChange={handlInput}/></div><br/><br/>
        <div className="row1" >
        Mobile No. : <input type="text" name="mobile" value={mydata.mobile} onChange={handlInput}/>
              City : <input type="text" name="city" value={mydata.city} onChange={handlInput}/></div><br/><br/>
        <div className="row1" >
        Date : <input type="date" name="date" value={mydata.date} onChange={handlInput}/>
        Time : <input type="time" name="time" value={mydata.time} onChange={handlInput}/></div><br/><br/>
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
          </div><br/><br/>
        <button onClick={handlSubmit}>Update</button>
        </div>
       
        </>
    )
}
export default EditData;
