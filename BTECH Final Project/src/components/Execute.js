import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const Execute = () => {
  const url = "http://localhost:5000/data";
  const fileurl = "http://localhost:5000/file";


  const [data, setdata] = useState({
    datasize: "",
    modelsize: "",
    datafile: null,
  });
  const [msg, setMsg] = useState(null)

  const submitf = async () => {
    try {
      const res = await axios.post(url, { datasize: data.datasize, modelsize: data.modelsize})
      const file = data.datafile
      if(file)
      {
        let formData = new FormData()
        formData.append("file", file)
        const fres = await axios.post(fileurl, formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        // console.log(fres)
      }
      setMsg("Data Sent Successfully")
    } catch (error) {
      setMsg("Some error occured")
    } finally {
      setTimeout(()=> setMsg(null), 2000)
    }
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    setdata({ ...data, datafile: file });
    // console.log(file)
  }
  return (
    <div>
      {msg && <Alert message={msg}/>}
      <div className="container">
        <h2 className="form-title">Data Information</h2>
        <div className="form-group">
          <i className="zmdi zmdi-file"></i>
          <input
            type="text"
            name="datasize"
            className="datasize"
            id="datasize"
            autoComplete="off"
            value={data.datasize}
            onChange={handleinput}
            placeholder="Data Size"
          />
        </div>

        <div className="form-group">
          <i className="zmdi zmdi-file"></i>
          <input
            type="text"
            name="modelsize"
            className="modelsize"
            id="modelsize"
            autoComplete="off"
            value={data.modelsize}
            onChange={handleinput}
            placeholder="Model Size"
          />
        </div>
        <div className="form-group">
          <i className="zmdi zmdi-upload"></i>
          <input
            type="file"
            name="datafile"
            className="datafile"
            id="datafile"
            autoComplete="off"
            // value={data.datafile}
            onChange={handleFileInput}
          />
        </div>
        <button onClick={submitf}>Submit</button>
      </div>
    </div>
  );
};

export default Execute;
