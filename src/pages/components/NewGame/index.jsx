import axios from "axios";
import React, { Component } from "react";
import { Table, Modal, Row, Col, Container } from "react-bootstrap";
import { ModalFooter, ModalBody } from "reactstrap";
import "../../../css/login.css";

const url = "http://localhost:3001/games";

class NewGame extends Component {
  state = {
    data: [],
    show: false,
    form: {
      id: "",
      name: "",
      size: "",
      gameType: "",
      img1: "",
      img2: "",
      img3: "",
      tipoModal: "",
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

  seleccionaJuego = (juegos) => {
    this.setState({
      tipoModal: "actualizar",
      form: {
        id: juegos.id,
        name: juegos.name,
        size: juegos.size,
        gameType: juegos.gameType,
        img1: juegos.img1,
        img2: juegos.img2,
        img3: juegos.img3,
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
                <th>Nombre</th>
                <th>Tamaño</th>
                <th>Tipo de juego</th>
                <th>Imagenes</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((juegos) => {
                return (
                  <tr key={juegos.id}>
                    <td>{juegos.id}</td>
                    <td>{juegos.name}</td>
                    <td>{juegos.size}</td>
                    <td>{juegos.gameType}</td>
                    <td>
                      <img className="ImgGames me-2" alt="" src={juegos.img1} />
                      <img className="ImgGames me-2" alt="" src={juegos.img2} />
                      <img className="ImgGames me-2" alt="" src={juegos.img3} />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => {
                          this.seleccionaJuego(juegos);
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
                <h4>Game</h4>
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
                  />
                </Col>
                <Col>
                  <label htmlFor="Name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.name : ""}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <label htmlFor="Name">Tamaño</label>
                  <input
                    type="text"
                    name="size"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.size : ""}
                  />
                </Col>
                <Col>
                  <label htmlFor="Name">Tipo de juego</label>
                  <input
                    type="text"
                    name="gameType"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.gameType : ""}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <label htmlFor="Name">URL Imagen 1</label>
                  <input
                    type="text"
                    name="img1"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.img1 : ""}
                  />
                  <br />
                </Col>
                <Col>
                  <label htmlFor="Name">URL Imagen 2</label>
                  <input
                    type="text"
                    name="img2"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.img2 : ""}
                  />
                  <br />
                </Col>
                <Col>
                  <label htmlFor="Name">URL Imagen 3</label>
                  <input
                    type="text"
                    name="img3"
                    className="form-control"
                    onChange={this.handleChange}
                    value={form ? form.img3 : ""}
                  />
                  <br />
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

export default NewGame;
