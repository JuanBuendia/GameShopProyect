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
