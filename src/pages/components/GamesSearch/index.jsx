import { useEffect, useState } from "react";
import axios from "axios";
import { Image, ListGroup } from "react-bootstrap";

function GameSearch() {
  const [listaJuegos, setListaJuegos] = useState([]);

  var options = {
    method: "GET",
    url: "https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/",
    params: { search_value: "Dark" },
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

  return (
    <ListGroup as="ol" numbered className = "col-8">
      {listaJuegos.map((item) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start bg-dark text-white"
          key={item.game_id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
            {item.currency} {item.search_price}
          </div>
          <Image src={item.image_thumbnail} rounded />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default GameSearch;
