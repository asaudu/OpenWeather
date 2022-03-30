import React, { useEffect, useState } from 'react'

function SearchWeather() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    let componentMounted = true;

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=02cfcf682f2bd37a2b563392cc9c6d48`);
            if(componentMounted) {
                setData(await response.json());
                console.log(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, []);
//https://images.unsplash.com/photo-1562948572-13e2f377a509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80
  return (
    <div>
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-4">
                <div class="card text-white text-center border-0">
                    <img src="https://images.unsplash.com/photo-1562948572-13e2f377a509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                        <form>
                            <div class="input-group mb-4 w-75 mx-auto">
                                <input type="search" class="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2"/>
                                <button type="submit" class="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></button>
                            </div> 
                        </form>
                        <div className="bg-dark bg-opacity-50 py-3">
                            <h2 class="card-title">{data.name}</h2>
                            <p class="card-text lead">Wednesday March 30, 2022</p>
                            <hr />
                            <i className="fas fa-cloud fa-4x"/>
                            <h1 className="fw-bolder mb-5">70 &deg;F</h1>
                            <p className="lead fw-bolder mb-0">Cloud</p>
                            <p className="lead ">70 &deg;F | 42 &deg;F</p>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default SearchWeather;
