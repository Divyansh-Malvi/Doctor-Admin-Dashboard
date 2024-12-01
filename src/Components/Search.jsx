import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [appoemt, setAppoemt] = useState("");
  const [mydata, setMydata] = useState([]);
//   const [noRecordsFound, setNoRecordsFound] = useState(false); // New flag for showing "No records found"

  const handleChange = (e) => {
    const appoimentNo = e.target.value;
    setAppoemt(appoimentNo);

    // if (emplname.trim() === "") {
    //   // If input is empty, reset the data and noRecordsFound flag
    //   setMydata([]);
    //   setNoRecordsFound(false);
    //   return;
    // }

    const api = `http://localhost:3000/appoiment/?appoimentno=${appoimentNo}`;
    axios.get(api).then((res) => {
        setMydata(res.data);
        console.log(res.data);

//         // Check if no records match
//         const matches = res.data.filter((key) => key.empname.toLowerCase().includes(emplname.toLowerCase()));
//         setNoRecordsFound(matches.length === 0); // Set flag to true if no matches are found
//       })
//       .catch((err) => {
//         console.error("Error fetching data", err);

     });
  };

 
  const ans = mydata.map((key)=>{
    return(
    <>
   <tr  border="2px solid red" width="1000px" align="center" fontWidth="2px" style={{color:"rgb(9, 139, 78)", }} >
        <td>{key.appoimentno}</td>
        <td>{key.name} </td>
        <td>{key.city}</td>
        <td>{key.mobile}</td>
        <td>{key.date}</td>
        <td>{key.time}</td>
        <td>{key.specialists}</td>
        <td>{key.treatment}</td>
    </tr>
    </>
    )
})

  return (
    <div style={{ textAlign: "center", marginTop: "30px" , marginLeft:"100px"}}>
        <div className="search">
      <h1>Search Appoiment Records!</h1>
      <input type="text" value={appoemt}  onChange={handleChange}  placeholder="Type Appoiment No...." 
        style={{ padding: "10px", width: "300px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "20px" }} 
      />
    </div>

      {/* Only show table when data is found */}
     
      <table  border="2px solid red" width="1000px" align="center">
      <thead >
      <tr border="2px solid red" width="1000px" align="center"  bgcolor="lightgreen" >
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Appoiment No</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>City</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Mobile No.</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Date</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Time</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Specialists</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
    </div>
  );
};

export default Search;