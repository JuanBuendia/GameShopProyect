import React from "react";
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <>
         <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/home">
                WebSiteName
              </Link>
            </div>
            <ul className="nav navbar-nav mx-auto">
              <li className="active">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">Page 1</Link>
              </li>
              <li>
                <Link to="/home">Page 2</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/home">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </>
    );
}

export default Nav;