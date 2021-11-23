import React from "react";
import { Carousel, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-store-data.p.rapidapi.com/api/featured/",
    headers: {
      "x-rapidapi-host": "steam-store-data.p.rapidapi.com",
      "x-rapidapi-key": "f60d33d507mshe74872ebd7754f4p11e444jsn30f38184cbe3",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.featured_win);
        setListaJuegos(response.data.featured_win);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://compass-ssl.xbox.com/assets/98/e8/98e83ab5-32bf-4483-b31a-eb1f28c1d3cd.jpg?n=1600x600.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/7150.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://jumpseller.s3.eu-west-1.amazonaws.com/store/juegosya/assets/banner_todos_juegos.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div className="text-center">
        <Row>
          <Col>
            <Button variant="outline-dark">BIBLIOTECA</Button>
          </Col>
        </Row>
      </div>
      <hr />
      <div className="container">
        <h4>Agregados recientemente</h4>
        <Row>
          {listaJuegos.map((item) => (
            <Col>
              <Card className="me-2" style={{ width: "15rem" }}>
                <Card.Img variant="top" src={item.large_capsule_image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.currency} {item.original_price}
                  </Card.Text>
                  <Button variant="dark">
                    <Link to={`/gameDetail/${item.id}`} className="text-white b">
                      Ir a la página del juego
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <hr />
      <div className="container">
        <h4>Próximamente</h4>
        <Row>
          <Col>
            <Card style={{ width: "9rem", height: "380px" }}>
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
            <Card style={{ width: "9rem", height: "380px" }}>
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
            <Card style={{ width: "9rem", height: "380px" }}>
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
      <br />
      <hr />
    </>
  );
}

export default Home;
