import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";

function Library() {
  const { add } = useParams();
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_details/search_like/game_id/",
    params: { search_value: `${add}` },
    headers: {
      "x-rapidapi-host": "steam-game-search-and-details.p.rapidapi.com",
      "x-rapidapi-key": "f60d33d507mshe74872ebd7754f4p11e444jsn30f38184cbe3",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log({ add });
        console.log(response.data);
        setListaJuegos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return listaJuegos.map((item) => (<Container className="mt-3">
        <Row>
          <Col className="col-3">
            <ListGroup as="ol" numbered className="bg-dark">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start bg-dark text-white"
              >
                <Image
                  src={item.video_poster}
                  rounded
                  alt="Image"
                  width="25"
                  height="25    "
                />
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="col-9 bg-light bg-gradient">
            <Row>
              <Col className="col-3">
                <Image
                  src={item.image_highlight}
                  rounded
                  alt="Image"
                  width="240"
                  height="305"
                />
              </Col>
              <Col className="col-9 g-5 mt-3">
                <Row>
                  <h2>{item.title}</h2>
                </Row>
                <Row>
                  <h3>
                    <br />
                  </h3>
                </Row>
                <Row>
                  <h3>{item.developer}</h3>
                </Row>
                <Row>
                  <h3>
                    <br />
                  </h3>
                </Row>
                <Row>
                  <h4>{item.release_date}</h4>
                  <p>{item.popular_tags}</p>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 g-1">
              <Button className="col-3" variant="success" width="100%">
                Jugar
              </Button>
              <Col className="col-1"></Col>
              <Button className="col-3" variant="secondary">
                Tiempo Jugado
              </Button>

              <Col className="col-6 bg-dark"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
  ));
}

export default Library;
