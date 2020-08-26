import React,{useState} from 'react'
import { Link } from "react-router-dom";
const MyNav = () => {







    return (
        <div className="nav-wrapper">
    <nav>

    <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a><Link to={"/"}> Home </Link></a></li>
        <li><a ><Link to={"/about"}>about </Link></a></li>
     
      </ul>
       </nav>
        </div>
    )
}

export default MyNav
