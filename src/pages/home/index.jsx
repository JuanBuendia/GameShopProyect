import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Home extends Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };

  render() {
    console.log(cookies.get("id"));
    console.log("Nombres: " + cookies.get("name"));
    console.log("Username: " + cookies.get("username"));
    return (
      <>
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                WebSiteName
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1>Menú Principal</h1>
        <br />
        <Link to="/games">Api</Link>
        <br />
        <button type="button" onClick={() => this.cerrarSesion()}>
          Cerrar Sesión
        </button>
      </>
    );
  }
}

export default Home;
