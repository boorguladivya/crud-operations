import React from "react";
import{useState} from 'react';
import axios from "axios";
import { useEffect } from "react";
//import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Data=()=>
{
    let[user,setUser]=useState();
    useEffect(()=>
    {
        axios.get("http://localhost:5000/users").then((res)=>{
        setUser(res.data)}).catch((err)=>console.log(err));
        
        // try{
        //     let fetch=async()=>
        //     {
        //         let {data}=await axios.get("http://localhost:5000/users");
        //         console.log(data);
        //      setUser(data);
        //     }
        //     fetch();
        // }
        // catch(error)
        // {
        //     console.log(error);
        // }
    },[]);
// let Navigate=useNavigate();
      
// let moveToView = (id) => {
//  Navigate(`/View/${id}`);
//  }
  
//   let moveToEdit=()=>{
//    Navigate("/Edit"); 
//     }

    let deletedata=(id)=>{
     axios.delete("http://localhost:5000/users/"+id);
     window.location.assign('/Data');
    }
    return(
        <div >
            <h2>List Of Users</h2>
            <Link to='/Create'>ADD</Link><br/><br/>
        <div>
        <table border="1" 
        cellPadding='10px' cellSpacing='0px'>
        
        <tr>
            <td>Name</td>
            <td>Phoneno</td>
            <td>Email</td>
            <td>Password</td>
            <td>View</td>
            <td>Update</td>
            <td>Delete</td>
        </tr>
        {user==null?"loading...":user.map((d)=>
        {
            return<tr key={d.id}>
                <td>{d.username}</td>
                <td>{d.phone}</td>
                <td>{d.email}</td>
                <td>{d.pw}</td>
    <td><Link  to={`/View/${d.id}`}>View</Link></td>
    <td><Link to={`/Edit/${d.id}`} >Update</Link></td>
    <td><button onClick={()=>deletedata(d.id)}>Delete</button></td>
            </tr>
        })
        }
          </table>
    </div>
    </div>
    )
}
export default Data;