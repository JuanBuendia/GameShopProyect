import React, { Component } from "react";
import { Carousel, Button, Row, Col, Card } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/59/d8/21/59d8216ebb8e74924e875409a0742853.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://fondosmil.com/fondo/3553.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://www.muycomputer.com/wp-content/uploads/2015/05/Juego_4K.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <div className="text-center">
          <Row>
            <Col>
              <Button variant="outline-dark">TODOS LOS JUEGOS DE PC</Button>
            </Col>
            <Col>
              <Button variant="outline-dark">OBTENER GAME PASS</Button>
            </Col>
            <Col>
              <Button variant="outline-dark">RECOMPENSAS</Button>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="container">
          <h4>Agregados recientemente</h4>
          <Row>
            <Col>
              <Card style={{ width: "9rem" , height:"425px"  }}>
                <Card.Img
                  variant="top"
                  src="https://as01.epimg.net/meristation/imagenes/2019/09/17/cover/891022221568712255.jpg"
                />
                <Card.Body>
                  <Card.Title>MINECRAFT</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem" , height:"425px"  }}>
                <Card.Img
                  variant="top"
                  src="https://media.vandal.net/t200/110192/dicey-dungeons-202111111547526_2.jpg"
                />
                <Card.Body>
                  <Card.Title>DICEY DUNGEONS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem" , height:"425px"  }}>
                <Card.Img
                  variant="top"
                  src="https://as.com/meristation/imagenes/2021/08/24/game_cover/755583641629831675.jpg"
                />
                <Card.Body>
                  <Card.Title>FORZA HORIZON 5</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem" , height:"425px"  }}>
                <Card.Img
                  variant="top"
                  src="https://as01.epimg.net/meristation/imagenes/2021/09/10/cover/358140721631282682.jpg"
                />
                <Card.Body>
                  <Card.Title>FOOTBALL MANAGER </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem" , height:"425px" }}>
                <Card.Img
                  variant="top"
                  src="https://uvejuegos.com/img/caratulas/66014/ITT.jpg"
                />
                <Card.Body>
                  <Card.Title>IT TAKES TWO</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem", height:"425px" }}>
                <Card.Img
                  variant="top"
                  src="http://s01.riotpixels.net/data/57/f2/57f2c92a-183f-45e4-abab-2f2423a27cb8.png/cover.one-step-from-eden.1250x2144.2020-06-15.13.png"
                />
                <Card.Body>
                  <Card.Title>ONE STEP FROM EDEN</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br/>
        <hr />
        <div className="container">
          <h4>Próximamente</h4>
          <Row>
            <Col>
              <Card style={{ width: "9rem", height:"380px"}}>
                <Card.Img
                  variant="top"
                  src="https://as01.epimg.net/meristation/imagenes/2021/10/19/cover/158550771634650894.jpg"
                />
                <Card.Body>
                  <Card.Title>Disponible 30/11/2021</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem", height:"380px"}}>
                <Card.Img
                  variant="top"
                  src="https://media.vandal.net/m/82244/halo-infinite-202072216173826_2.jpg"
                />
                <Card.Body>
                  <Card.Title>Disponible 8/12/2021</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "9rem", height:"380px"}}>
                <Card.Img
                  variant="top"
                  src="https://uvejuegos.com/img/caratulas/59382/total-war-warhammer-2.jpg"
                />
                <Card.Body>
                  <Card.Title>Disponible el 17/02/2022</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br/>
        <hr />
      </>
    );
  }
}

export default Home;
