import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Games() {
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
    <Container>
      <br/>
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
                <Button variant="dark ">
                  <Link to={`/gameDetail/${item.id}`} className="text-white b">
                    Ir a la página del juego
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Games;
