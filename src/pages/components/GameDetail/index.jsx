import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Row } from "react-bootstrap";

function GameDetail() {
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_details/search_like/game_id/",
    params: { search_value: "440"},
    headers: {
      
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setListaJuegos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listaJuegos.map((item) => (
    <div className="container-fluid bg-dark text-white">
      <div className="align-align-content-start">
        <Row>
          <Col xs={6} md={4}>
            <Image src={item.image_highlight} fluid />
          </Col>
          <Col xs={6} md={4}>
            <h2>{item.title}</h2>
            <h3>{item.category}</h3>
            <h4>
              {item.developer} {item.release_date}
            </h4>
          </Col>
        </Row>
      </div>
      <div className="align-content-center">
        {item.game_description_snippet}
      </div>
    </div>
  ));
}

export default GameDetail;
