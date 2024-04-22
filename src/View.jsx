
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from './navbar.module.css';

const View = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/users/'+id)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {state ? (
        <center>
          <form  className={Styles.f1}>
          <h2>User Details</h2>
          <p>Name: &nbsp;&nbsp;{state.username}</p>
          <p>Phone: &nbsp;&nbsp;{state.phone}</p>
          <p>Email: &nbsp;{state.email}</p>
          <p>Password: &nbsp;&nbsp;{state.pw}</p>
          <button><Link to={`/Edit/${state.id}`}>Update</Link></button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button> <Link to='/Data'>Cancel</Link></button> 
        </form>
          </center>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default View;
