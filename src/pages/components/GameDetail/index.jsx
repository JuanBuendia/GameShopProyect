import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function GameDetail() {
  const { id } = useParams();
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_details/search_like/game_id/",
    params: { search_value: `${id}` },
    headers: {
      "x-rapidapi-host": "steam-game-search-and-details.p.rapidapi.com",
      "x-rapidapi-key": "f60d33d507mshe74872ebd7754f4p11e444jsn30f38184cbe3",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log({ id });
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

  return listaJuegos.map((item) => (
    <Container className="mt-5 bg-dark text-white">
      <div className="align-align-content-start">
        <Row>
          <Col className="col-3 mt-4">
            <Image
              src={item.video_poster}
              rounded
              alt="Image"
              width="320"
              height="180"
            />
          </Col>
          <Col className="col-7 g-5 mt-3">
            <Row>
              <h2>{item.title}</h2>
            </Row>
            <Row>
              <h3>
                <br />
              </h3>
            </Row>
            <Row>
              <h3>
                {item.developer} - {item.release_date}
              </h3>
            </Row>
            <Row>
              <p>{item.popular_tags}</p>
            </Row>
          </Col>
          <Col className="col-2 g-5 mt-5">
            <Row>
              <br /> <br />
            </Row>
            <Row>
              <Button variant="success">Agregar a biblioteca</Button>
            </Row>
            <Row>
              <br />
            </Row>
          </Col>
        </Row>
      </div>
      <div className="align-content-center">
        <Carousel>
          <Carousel.Item interval={2000}>
            <Image src={item.image_highlight} fluid />
            <Carousel.Caption>
              <h3>Description</h3>
              <p>{item.game_description_snippet}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={item.image_highlight} fluid />
            <Carousel.Caption>
              <h3>Reviews</h3>
              <p>{item.responsive_reviewdesc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </Container>
  ));
}

export default GameDetail;
