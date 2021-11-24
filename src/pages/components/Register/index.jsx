import axios from "axios";
import React, { Component } from "react";
import "../../../css/login.css";

const url = "http://localhost:3001/users";

class Register extends Component {
  state = {
    data: [],
    form: {
      id: "",
      role: "Player",
      name: "",
      documentType: "",
      document: "",
      card: "",
      username: "",
      password: "",
    },
  };

  //capturar lo que digita el usuario
  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  //insertar
  peticionPost = async () => {
    await axios
      .post(url, this.state.form)
      .then((response) => {
        window.location.href = "home";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionGet = () => {
    axios
      .get(url)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { form } = this.state;
    return (
      <>
        <br />
        <div className="sidenav"></div>
        <div className="main">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="login-form">
              <section className="vh-100">
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card shadow-2-strong cardd2">
                        <div className="card-body p-5 text-center">
                          <h3 className="mb-2">Registrar</h3>
                          <input
                            type="text"
                            name="id"
                            className="form-control"
                            readOnly
                            onChange={this.handleChange}
                            value={form ? form.id : this.state.data.length + 1}
                            hidden
                          />

                          <input
                            type="text"
                            name="role"
                            className="form-control"
                            readOnly
                            onChange={this.handleChange}
                            value={form ? form.role : "Player"}
                            hidden
                          />

                          <label htmlFor="Name">Tipo de Documento</label>
                          <select
                            className="form-control"
                            name="documentType"
                            onChange={this.handleChange}
                          >
                            <option value="" selected>
                              Seleccionar:
                            </option>
                            <option value="CC">Cédula de Ciudadania</option>
                            <option value="TI">Tarjeta de Identidad</option>
                          </select>

                          <label htmlFor="Name">Nombres y Apellidos</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={this.handleChange}
                          />

                          <label htmlFor="Name">Documento</label>
                          <input
                            type="text"
                            name="document"
                            className="form-control"
                            onChange={this.handleChange}
                          />

                          <label htmlFor="Name"># Tarjeta de Crédito</label>
                          <input
                            type="text"
                            name="card"
                            className="form-control"
                            onChange={this.handleChange}
                          />

                          <label htmlFor="Name">Nombre de usuario</label>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                          <label htmlFor="Name">Contraseña</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                          <br/>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              this.peticionPost();
                            }}
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
