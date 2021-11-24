import { useEffect, useState } from "react";
import axios from "axios";
import { Image, ListGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

function GameSearch() {
  const { search } = useParams();
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/",
    params: { search_value: `${search}` },
    headers: {
      "x-rapidapi-host": "steam-game-search-and-details.p.rapidapi.com",
      "x-rapidapi-key": "f60d33d507mshe74872ebd7754f4p11e444jsn30f38184cbe3",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log({ search });
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

  return (
    <div className="container center">
      <br />
      <ListGroup as="ol" numbered className="col-12">
        {listaJuegos.map((item) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start bg-dark text-white"
            key={item.game_id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Link to={`/gameDetail/${item.game_id}`} className="text-white b">
                  {item.title}
                </Link>
              </div>
              {item.currency} {item.search_price}
            </div>
            <Image src={item.image_thumbnail} rounded />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default GameSearch;
