import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Receive = () =>
{
  const [data, setData] = useState([])
  
  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:5000/")
      return response.data
    } 
    catch (error) {
      throw "Data not available"
    }
  };

  useEffect(()=>{
      getdata()
      .then(da => setData(da))
      .catch(err => {
        setData([])
        alert(err)
      })

  },[])

  return (
    <>
      <h5 className="table_heading">Information Details</h5>
      <table>
        <thead>
          <tr>
            <th>Serial NO</th>
            <th>ID</th>
            <th>Machine</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => <tr key={entry.Serial}>
            <td>{entry.Serial}</td>
            <td>{entry.ID}</td>
            <td>{entry.Machine}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default Receive;
