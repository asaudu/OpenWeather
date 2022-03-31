import React, { useEffect, useState } from "react";
import FavoriteCity from "./favoriteCity";
import Form from "./form";

function SearchWeather() {
   const [search, setSearch] = useState("");
   const [data, setData] = useState({});
   const [input, setInput] = useState("");
   const [city, setCity] = useState([]);

   let componentMounted = true;



//previous weatherapp useEffect
// useEffect(() => {
//     console.log(useEffect );
//     //goes to the route below to get the response
//     fetch("/getWeatherPlano")
//       .then((res) => res.json())
//       .then((data) => setData(data)); 02cfcf682f2bd37a2b563392cc9c6d48
//       //empty array below to make sure it only renders on the first render of component
//REACT_APP_WEATHER_API_KEY
//   }, []);

//tutorial useEffect
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=02cfcf682f2bd37a2b563392cc9c6d48&units=imperial`);
      if (componentMounted) {
        setData(await response.json());
        console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchWeather();
  }, [search]);



   
  let temp = (data?.main?.temp - 0).toFixed(0);
// //  console.log("main temp ", temp);
    let temp_min = (data?.main?.temp_min - 0).toFixed(0);
    let temp_max = (data?.main?.temp_max - 0).toFixed(0);

  const handleSubmit = (event) => {
      event.preventDefault();
      setSearch(input);
  }
  
  const addCity = (newCity) => {
    //console.log(newStudent);
    setCity((city) => [...city, newCity]);
  }

  return (
    <div>
      <div className="container mt-6">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src="https://images.unsplash.com/photo-1562948572-13e2f377a509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                      name="search"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <FavoriteCity addCity={addCity}/>
                <Form />
                <div className="bg-dark bg-opacity-50 py-3">
                  <h2 className="card-title">{data?.name}</h2>
                  <p>{!data ? "Loading..." : ''}</p>
                  <p className="card-text lead">Wednesday March 30, 2022</p>
                  <hr />
                  <i className="fas fa-cloud fa-4x" />
                  <h1 className="fw-bolder mb-5">{temp} &deg;F</h1>
                  <p className="lead fw-bolder mb-0">Clouds</p>
                  <p className="lead ">High {temp_max} &deg;F | Low {temp_min} &deg;F | Humidity {data?.main?.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWeather;
