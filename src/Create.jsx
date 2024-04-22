import React, { useState} from 'react';
import axios from 'axios';
import Styles from './navbar.module.css';
import { useNavigate} from "react-router-dom";
const Create=()=>
{
   let[state,setState]=useState(
        {
            username:"",
            phone:"",
            email:"",
            pw:"",
        }
    );
  
    let{username,phone,email,pw}=state;
    let Navigate=useNavigate();

    let handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(state);
         axios.post("http://localhost:5000/users",state).then((res)=>
     {
            console.log(res);
            Navigate("/Data");
         }).catch((err)=>
         {
             console.log(err);
     })
 
    }

    let handleChange=(e)=>
    {
        let{name,value}=e.target;
        setState({...state,[name]:value});
    }
   
    return(
        <div>
            <center>
            <form onSubmit={handleSubmit} className={Styles.f1}>
           <label className={Styles.lname}>Username</label>
           <input type="text" className={Styles.name} placeholder="enter name" value={username} name='username' onChange={handleChange}></input><br></br>
           <label className={Styles.lphone}>Phone number</label>
           <input type="text" className={Styles.phone} placeholder="enter phone number" value={phone} name='phone' onChange={handleChange}></input><br></br>
           <label className={Styles.lemail}>Email</label>
           <input type="text" className={Styles.email} placeholder="enter email" value={email} name='email' onChange={handleChange}></input><br></br>
           <label className={Styles.lpw}>Password</label>
           <input type="password" className={Styles.pw} placeholder="enter Password" value={pw} name='pw' onChange={handleChange}></input><br></br>
          
            <button className={Styles.sub} >Submit</button>

                </form>
            </center>
        </div>)
       
}
export default Create;