import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./FormUpdate.css";
function FormUpdate() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:2000/getid/${id}`)
      .then((res) => {
        console.log(user);
        setUser(res.data);
      })
      .catch((err) => console.log("Error : ", err));
  }, [id]);
  const save = () => {
    axios.put(`http://localhost:2000/updatebyid/${id}`,user)
    .then((res)=>{
        alert("Student details updated successfully")
        setUser(res.data)      
    })
    .catch((err)=>{
        console.log("Error : ",err);
        
    })
  };
  const back = () => {navigate('/display')};
  return (
    <div id="updatesection">
      <h1>Student Details</h1>
      <h3>Name</h3>
      <input
        type="text"
        value={user.name}
        placeholder={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      ></input>
      <br /> <h3>Age</h3>
      <input
        type="number"
        value={user.age}
        placeholder={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      ></input>
      <br />
      <h3>Course</h3>
      <select value={user.course} onChange={(e)=>setUser({...user,course:e.target.value})}>
        <option>MCA</option>
        <option>MBA</option>
        <option>BCA</option>
        <option>BBA</option>
        <option>BCom</option>
      </select>
      <br />
      <button onClick={save}>save</button>
      <button onClick={back}>back</button>
    </div>
  );
}

export default FormUpdate;
