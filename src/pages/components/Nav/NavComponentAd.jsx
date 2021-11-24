import React from "react";
import { Component } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import HomeAd from "../homeAd";
import Cookies from "universal-cookie";
import NewGame from "../NewGame";
import NewPlayer from "../NewPlayer";
import Reports from "../Reports";

const cookies = new Cookies();

export default class NavComponentAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleCambio = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //capturar lo que digita el usuario
  handleCambio = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  handleSubmit(event) {
    window.location.href = `/gameSearch/${this.state.value}`;
    event.preventDefault();
  }

  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to="/homeAd">
                <i class="bi bi-xbox"></i>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/newGame">
                    NUEVO JUEGO
                  </Nav.Link>
                  <Nav.Link as={Link} to="/newPlayer">
                    NUEVO USUARIO
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reports">
                    REPORTES
                  </Nav.Link>
                </Nav>
                <Form className="d-flex" onSubmit={this.handleSubmit}>
                  <input
                    //ENLAZAR CON GAME SEARCH
                    type="text"
                    placeholder="Buscar juegos"
                    className="form-control me-2"
                    onChange={this.handleCambio}
                  />
                  <Button
                    type="submit"
                    variant="outline-info"
                    className="me-2"
                    onClick={this.handleSubmit}
                  >
                    <i class="bi bi-search"></i>
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => this.cerrarSesion()}
                  >
                    <i class="bi bi-box-arrow-in-right"></i>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/homeAd">
              <HomeAd />
            </Route>
            <Route path="/newGame">
              <NewGame />
            </Route>
            <Route path="/newPlayer">
              <NewPlayer />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
