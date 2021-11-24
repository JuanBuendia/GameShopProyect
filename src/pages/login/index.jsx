import React, { Component } from "react";
import "../../css/login.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:3001/users";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      role: "",
      username: "",
      password: "",
    },
  };

  //metodo para capturar valor de los inputs username y password
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form)
  }

  //método para iniciar sesión
  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          role: this.state.form.role,
          username: this.state.form.username,
          password: this.state.form.password,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          if (respuesta.role === "Admin") {
            cookies.set("id", respuesta.id, { path: "/" });
            cookies.set("name", respuesta.name, { path: "/" });
            cookies.set("username", respuesta.username, { path: "/" });
            alert(`Bienvenido/a ${respuesta.name}`);
            window.location.href = "homeAd";
          } else {
            cookies.set("id", respuesta.id, { path: "/" });
            cookies.set("name", respuesta.name, { path: "/" });
            cookies.set("username", respuesta.username, { path: "/" });
            alert(`Bienvenido/a ${respuesta.name}`);
            window.location.href = "home";
          }
        } else {
          alert("El usuario o la contraseña son incorrectos.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="sidenav"></div>
        <div className="page">
          <div className="main">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="login-form">
                <section className="vh-100">
                  <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                          <div className="card-body p-5 text-center">
                            <h3 className="mb-2">Sign in</h3>
                            <div className="form-outline mb-2">
                              <select name="role" className="form-control"
                                onChange={this.handleChange}>
                                <option value="Admin">Administrador</option>
                                <option value="Player">Jugador</option>
                              </select>
                              <label className="form-label">Rol</label>
                            </div>

                            <div className="form-outline mb-2">
                              <input
                                type="text"
                                id="username"
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                              />
                              <label className="form-label">User</label>
                            </div>

                            <div className="form-outline mb-2">
                              <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                onChange={this.handleChange}
                              />
                              <label className="form-label">Password</label>
                            </div>

                            <button
                              className="btn btn-primary btn-md btn-block me-2"
                              type="submit"
                              onClick={() => this.iniciarSesion()}
                            >
                              Login
                            </button>
                            <Link className="btn btn-success" to="/register" >Register</Link>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
