import React, { useState } from "react";
import './Form.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
     e.preventDefault();
    const details={name,age,course};
    axios.post('http://localhost:2000/userpost',details)
    .then((res)=>{
        console.log('Response : ',res.data)
        alert('Form submitted Successfully')
        setName('')
        setAge(0)
        setCourse(0)
  })
    .catch((err)=>console.log('Error : ',err))
  }
  const lbl={
    display:'inline-block',
    width:'180px',
    marginLeft:'30px',
    marginTop:'30px'
  }
  const view=()=>{
    navigate('/display')
  }
  return (
    <>
    <form onSubmit={handlesubmit} style={{marginLeft:'auto',marginRight:'auto',width:'500px',marginTop:'100px',boxShadow:'0px 0px 2px 2px white',paddingBottom:'30px'}}>
      <p>Student Form</p>
      <label htmlFor="name" style={lbl}>Enter the name</label>
      <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <br/><label htmlFor="age" style={lbl}>Enter the age</label>
      <input type="number" id="age" value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <br/><label htmlFor="course" style={lbl}>Enter the course</label>
      <select id="course" value={course} onChange={(e)=>setCourse(e.target.value)}>
        <option>MCA</option>
        <option>MBA</option>
        <option>BCA</option>
        <option>BBA</option>
        <option>BCom</option>
      </select>
      <br/><br/>
      <div className="btns">
      <button type="submit">submit</button>
      </div>
      </form>
      <div className="btns">
      <button onClick={view} style={{marginTop:'20px',width:'200px'}}>View All Students</button>
      </div>
    </>
  );
}

export default Form;
