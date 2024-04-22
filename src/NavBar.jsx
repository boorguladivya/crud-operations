import React from "react";
import Styles from './navbar.module.css';
import {NavLink} from 'react-router-dom';
const NavBar=()=>{
    return(
        <section className={Styles.main}>
            <article className={Styles.leftnav}><h1>LOGO</h1></article>
            <article className={Styles.rightnav}>
                <NavLink className={Styles.links} to="/Create"> Create</NavLink>
                <NavLink className={Styles.links} to="/Data"> Data</NavLink>
                <NavLink className={Styles.links} to="/View"> View</NavLink>
                <NavLink className={Styles.links} to="/Edit"> Edit</NavLink>
            </article>
        </section>
    )
}
export default NavBar;