import { useEffect, useState } from "react";
import axios from "axios";

function Games() {
  const [listaJuegos, setListaJuegos] = useState([]);

  const options = {
    method: "GET",
    url: "https://cheapshark-game-deals.p.rapidapi.com/deals",
    params: {
      lowerPrice: "0",
      steamRating: "0",
      title: "batman",
      desc: "0",
      output: "json",
      steamworks: "0",
      sortBy: "Deal Rating",
      AAA: "0",
      pageSize: "60",
      exact: "0",
      upperPrice: "50",
      pageNumber: "0",
      onSale: "0",
      metacritic: "0",
      storeID: "1,2,3",
    },
    headers: {
      "x-rapidapi-host": "cheapshark-game-deals.p.rapidapi.com",
      "x-rapidapi-key": "f60d33d507mshe74872ebd7754f4p11e444jsn30f38184cbe3",
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
    <>
      <div className="app" class="container-fluid">
      <div class="col-2"></div>
      <div class="col-8">
      <div class="row row-cols-1 row-cols-md-3 g-4">
          
          {listaJuegos.map((item) => (
            <div class="col align-content-center">
              <div class="card" style={{ width: 300, height: 300 }}>
                <img
                  src={item.thumb}
                  class="card-img-top imagencita"
                  alt=""
                  style={{ width: "auto", height: 200 }}
                />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.steamRatingText}</p>
                </div>
              </div>
            </div>
          ))}          
        </div>
      </div>
        
        <div class="col-2"></div>
      </div>
    </>
  );
}

export default Games;
