import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Row } from "react-bootstrap";

function Games() {
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-store-data.p.rapidapi.com/api/featured/",
    headers: {
      
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
  });

  return (
    <Row xs={1} md={2} className="g-4">
      {listaJuegos.map((item) => (
        <Card
          className="text-center bg-dark text-white g-4"
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src={item.large_capsule_image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.currency} {item.original_price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Games;
