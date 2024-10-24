import React, { useEffect, useState } from "react";
import axios from "axios";
import "./formdisplay.css";
import { useNavigate } from "react-router-dom";
function Formdisplay() {
  const [student, setStudent] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:2000/userget")
      .then((res) => {
        setStudent(res.data);
        console.log("Response : ", student);
      })
      .catch((err) => console.log("Error : ", err));
  }, []);
  const save=(id)=>{navigate(`/getbyid/${id}`)}
  const del=(id)=>{
    axios.delete(`http://localhost:2000/deletebyid/${id}`)
    .then((res)=>{
      setStudent(res.data)
    })
    .catch((err)=>{
      console.log('Error in deleting data',err);
      
    })
  }
  const back=()=>{
    navigate('/')
  }
  return (
    <fieldset>
      <legend>STUDENTS</legend>
      <button onClick={back} style={{}}>Goback</button>
      {student.length > 0 ? (
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                </tr>
            </thead>
            <tbody>
          {student.map((i) => (
            <tr key={i._id} id="studentdisp">
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.course}</td>
              <td><button onClick={()=>save(i._id)}>Update</button></td>
              <td><button onClick={()=>del(i._id)}>delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        </>
      ) : (
        <p>NO STUDENTS</p>
      )}
    </fieldset>
  );
}

export default Formdisplay;
