import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Styles from './navbar.module.css';
import { Link } from 'react-router-dom';
const Edit = () => {
  const { id } = useParams(); // destructuring
  let [state, setState] = useState({
    username: "",
    phone: "",
    email: "",
    pw: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/"+id)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
//OnChange={setState(e=>{(...state,name:e.target.value)})}

 let Navigate=useNavigate();

let handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:5000/users/"+id,state) .then((res) => {
    console.log(res);
    Navigate("/Data");
      })
      .catch((err) => console.log(err));
}
  return (
    <div>
      <center>
        <form className={Styles.f1} onSubmit={handleSubmit}>
          <label className={Styles.lname}>Username</label>
          <input type="text" className={Styles.name} placeholder="enter name" value={state.username} name='username' onChange={handleChange}></input><br></br>
          <label className={Styles.lphone}>Phone number</label>
          <input type="text" className={Styles.phone} placeholder="enter phone number" value={state.phone} name='phone' onChange={handleChange}></input><br></br>
          <label className={Styles.lemail}>Email</label>
          <input type="text" className={Styles.email} placeholder="enter email" value={state.email} name='email' onChange={handleChange}></input><br></br>
          <label className={Styles.lpw}>Password</label>
           <input type="password" className={Styles.pw} placeholder="enter Password" value={state.pw} name='pw' onChange={handleChange}></input><br></br>
           <button className={Styles.sub} ><Link to='/Data'> cancel</Link></button>&nbsp;&nbsp;
           <button className={Styles.sub} >Submit</button>
        </form>
      </center>
    </div>
  );
}

export default Edit;
