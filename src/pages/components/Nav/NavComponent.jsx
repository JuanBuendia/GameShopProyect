import React from "react";
import { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Games from "../Games";
import Home from "../home";
import Cookies from "universal-cookie";
import Reports from "../Reports";
import Library from "../Library";

const cookies = new Cookies();

export default class NavComponent extends Component {
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
              <Navbar.Brand as={Link} to="/home">
                <i class="bi bi-xbox"></i>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/library">
                    BIBLIOTECA
                  </Nav.Link>
                  <Nav.Link as={Link} to="/reports">
                    REPORTES
                  </Nav.Link>
                  <Nav.Link as={Link} to="/games">
                    STORE
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                  //ENLAZAR CON GAME SEARCH
                    type="search"
                    placeholder="Buscar juegos"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-info"
                    className="me-2"
                  ><i class="bi bi-search"></i>
                  </Button>
                  <Button
                    variant="outline-warning"
                    onClick={() => this.cerrarSesion()}
                  ><i class="bi bi-box-arrow-in-right"></i>
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/library">
              <Library/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
