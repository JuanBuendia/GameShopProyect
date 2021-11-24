import axios from "axios";
import React, { Component } from "react";
import { Table, Modal, Row, Col } from "react-bootstrap";
import { ModalFooter, ModalBody } from "reactstrap";

const url = "http://localhost:3001/users";

class NewPlayer extends Component {
  state = {
    data: [],
    show: false,
    form: {
      id: "",
      role: "",
      name: "",
      username: "",
      password: "",
    },
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

  //modal
  HandleModal() {
    this.setState({ show: !this.state.show });
  }
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

  seleccionaUser = (users) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: users.id,
        role: users.role,
        name: users.name,
        username: users.username,
        password: users.password,
      },
    });
  };

  //insertar
  peticionPost = async () => {
    await axios
      .post(url, this.state.form)
      .then((response) => {
        this.HandleModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //peticion editar
  peticionPut = () => {
    axios
      .put(url + "/" + this.state.form.id, this.state.form)
      .then((response) => {
        this.HandleModal();
        this.peticionGet();
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
        <div className="text-center">
          <button
            className="btn btn-success"
            onClick={() => {
              this.setState({ form: null, tipoModal: "insertar" });
              this.HandleModal();
            }}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
        <br />
        <div className="container">
          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Rol</th>
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((users) => {
                return (
                  <tr key={users.id}>
                    <td>{users.id}</td>
                    <td>{users.role}</td>
                    <td>{users.name}</td>
                    <td>{users.username}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => {
                          this.seleccionaUser(users);
                          this.HandleModal();
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Modal show={this.state.show}>
            <ModalBody>
              <div className="form-group">
                <h4>Player</h4>
              </div>
            </ModalBody>
            <div className="container">
              <Row>
                <Col>
                  <label htmlFor="Name">ID</label>
                  <input
                    type="text"
                    name="id"
                    className="form-control"
                    readOnly
                    onChange={this.handleChange}
                    value={form ? form.id : this.state.data.length + 1}
                  />
                  <label htmlFor="Name">Rol</label>
                  <select
                  className="form-control"
                    name="role"
                    onChange={this.handleChange}
                    readOnly
                    value={form ? form.role : ""}
                  >
                    <option value="" selected>Seleccionar:</option>
                    <option value="Player" >Player</option>
                  </select>
                  <label htmlFor="Name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.name : ""}
                  />
                  <label htmlFor="Name">Nombre de usuario</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.username : ""}
                  />
                  <label htmlFor="Name">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.password : ""}
                  />
                </Col>
              </Row>
            </div>
            <ModalFooter>
              {this.state.tipoModal === "insertar" ? (
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.peticionPost();
                  }}
                >
                  Agregar
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => this.peticionPut()}
                >
                  Actualizar
                </button>
              )}
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.HandleModal();
                }}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default NewPlayer;
