import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function GameDetail() {
  const { id } = useParams();
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_details/search_like/game_id/",
    params: { search_value: `${ id }` },
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
    <div className="container-fluid bg-dark text-white">
      <div className="align-align-content-start">
        <Row>
          <Col xs={6} md={4}>
            <Image src={item.video_poster} fluid />
          </Col>
          <Col xs={6} md={4}>
            <h2>{item.title}</h2>
            <h3>{item.category}</h3>
            <h4>
              {item.developer} {item.release_date}
            </h4>
            <h6>{item.popular_tags}</h6>
          </Col>
        </Row>
      </div>
      <div className="align-content-center">
        <Carousel>
          <Carousel.Item interval={2000}>
            <Image src={item.image_highlight} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <ReactPlayer playsInline src={item.video_webm_hd} />
          </Carousel.Item>
        </Carousel>
        {item.game_description_snippet}
      </div>
    </div>
  ));
}

export default GameDetail;
