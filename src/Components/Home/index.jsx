import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listaJuegos,setListaJuegos]=useState([]);

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
    axios.request(options).then(function (response) {        
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
      <div className='app'>
            <ul>
                {listaJuegos.map(item =>(                   
                    <li key={item.gameID}>
                        {item.internalName}
                    </li>                   
                ))}
            </ul>
        </div>   
    </>
  );
}

export default Home;
