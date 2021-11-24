import axios from "axios";
import React, { Component } from "react";
import { Table, Modal, Row, Col , Container} from "react-bootstrap";
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
      documentType: "",
      document: "",
      card: "",
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
        documentType: users.documentType,
        document: users.document,
        card: users.card,
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
                <th>Tipo de Documento</th>
                <th>Documento</th>
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
                    <td>{users.documentType}</td>
                    <td>{users.document}</td>
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
            <Container>
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
                    required
                  />
                </Col>
                <Col>
                <label htmlFor="Name">Rol</label>
                  <select
                    className="form-control"
                    name="role"
                    onChange={this.handleChange}
                    value={form ? form.role : ""}
                    required
                  >
                    <option value="" selected>
                      Seleccionar:
                    </option>
                    <option value="Player">Jugador</option>
                    <option value="Admin">Administrador</option>
                  </select>
                  </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <label htmlFor="Name">Tipo de documento</label>
                  <select
                    className="form-control"
                    name="documentType"
                    onChange={this.handleChange}
                    value={form ? form.documentType : ""}
                    required
                  >
                    <option value="" selected>
                      Seleccionar:
                    </option>
                    <option value="CC">Cédula de Ciudadania</option>
                    <option value="TI">Tarjeta de Identidad</option>
                  </select>
                </Col>
                <Col>
                <label htmlFor="Name">Documento</label>
                  <input
                    type="text"
                    name="document"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.document : ""}
                    required
                  />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <label htmlFor="Name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.name : ""}
                    required
                  />
                </Col>
                <Col>
                <label htmlFor="Name">Nombre de usuario</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.username : ""}
                    required
                  />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <label htmlFor="Name">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.password : ""}
                    required=""
                  />
                  <br/>
                </Col>
              </Row>
            </Container>
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
